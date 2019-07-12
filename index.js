import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BucketBlog = ({
  bucket,
  content,
  className,
  style = {}
}) => {
  if (!root && !content) throw new Error('No "root" or "content" property provided. Cannot get content.');
  const [Path, setPath]       = useState();
  const [Content, setContent] = useState(content);
  const [Objects, setObjects] = useState();
  const [Folder, setFolder]   = useState();
  const [File, setFile]       = useState();
  
  const getContent            = async path => {
    const { data } = await axios.get(`https://s3.amazonaws.com/${bucket}${path}`);
    setContent(data);
  };

  useEffect(() => {
    setContent(Object.values(content || {}).map(_content => _content.Key))
  }, [content]);
  useEffect(() => {
    const objects = [];
    content.map(_content => {
      const check = _content.replace(/\/$/, '').split('/');
      let checked = '';
      check.map(_check => {
        if (!objects.includes(`${checked}/${_check}`)) objects.push(`${checked}/${_check}`);
        checked = `${checked}/${_check}`;
      });
    });
    setObjects(objects.sort((a, b) => a < b ? 1 : a > b ? -1 : 0));
  }, [Content]);
  useEffect(() => {
    setPath(window.location.pathname.substr(1,).replace(/\/$/, '').split('/'));
    if (Objects.includes(window.location.pathname + '.html')) {
      setFile(window.location.pathname + '.html');
      setFolder(`${window.location.pathname.replace(/\/[a-zA-Z0-9._-]+$/, '')}?/[a-zA-Z0-9._-]+$`);
    } else if (Objects.includes(window.location.pathname + '/index.html')) {
      setFile(window.location.pathname + '/index.html');
      setFolder(`${window.location.pathname}?/[a-zA-Z0-9._-]+$`);
    } else if (Objects.includes(window.location.pathname)) {
      setFile(window.location.pathname);
      setFolder(`${window.location.pathname}?/[a-zA-Z0-9._-]+$`);
    }
  }, [window.location.pathname, Objects]);
  useEffect(() => {
    if (!File) return setContent();
    getContent(File);
  }, [File]);

  return <main className={`BucketBlog${className ? ` ${className}` : ''}`} dangerouslySetInnerHTML={{ __html: Content }} style={style} />;
};

export default BucketBlog;