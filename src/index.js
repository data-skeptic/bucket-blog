import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BucketBlog = ({
  bucket,
  content,
  className,
  style = {},
  Link
}) => {
  // if (!content) throw new Error('No "root" or "content" property provided. Cannot get content.');
  const [Path, setPath]       = useState();
  const [Content, setContent] = useState();
  const [Objects, setObjects] = useState();
  const [Folder, setFolder]   = useState();
  const [File, setFile]       = useState();
  
  const getContent            = path => axios.get(`https://s3.amazonaws.com/${bucket}${path}`)
                                          .then(({ data }) => setContent(data))
                                          .catch(() => setContent());

  useEffect(() => {
    setPath(window.location.pathname.substr(1,).replace(/\/$/, '').split('/'));
  }, [window.location.pathname]);
  useEffect(() => {
    const list = Object.values(content || []).map(_content => _content.Key);
    const objects = [];
    list.map(_content => {
      const check = _content.replace(/\/$/, '').split('/');
      let checked = '';
      check.map(_check => {
        if (!objects.includes(`${checked}/${_check}`)) objects.push(`${checked}/${_check}`);
        checked = `${checked}/${_check}`;
      });
    });
    setObjects(objects.sort((a, b) => a < b ? 1 : a > b ? -1 : 0));
  }, [content]);
  useEffect(() => {
    if (!Path || !Objects) return;
    const currentPath = `/${Path.join('/')}`;
    if (Objects.includes(currentPath + '.html')) {
      setFile(currentPath + '.html');
      setFolder(`${currentPath.replace(/\/[a-zA-Z0-9._-]+$/, '')}?/[a-zA-Z0-9._-]+$`);
    } else if (Objects.includes(currentPath + '/index.html')) {
      setFile(currentPath + '/index.html');
      setFolder(`${currentPath}?/[a-zA-Z0-9._-]+$`);
    } else if (Objects.includes(currentPath)) {
      setFile(currentPath);
      setFolder(`${currentPath}?/[a-zA-Z0-9._-]+$`);
    }
  }, [Path, Objects]);
  useEffect(() => {
    if (!File) return setContent();
    if (File.includes('.html')) {
      getContent(File);
    } else {
      setContent();
    }
  }, [File]);

  const pathRegex = new RegExp(Folder);

  return (
    <main className={`BucketBlog${className ? ` ${className}` : ' row'}`} style={style}>
      <aside className="list-group list-group-flush col p-0 border-right h-100" style={{ minWidth:300, maxWidth: 300 }}>
        {Objects && window.location.pathname !== '/wiki' && <Link to={window.location.pathname.replace(/\/[a-zA-Z0-9._-]+$/, '')}><i className="mr-2 fa fa-fw fa-level-up" /> Back</Link>}
        {Objects && Objects.filter(obj => obj.match(pathRegex)).filter(obj => obj.includes('index.html')).map((obj, o) => {
          const link = obj.replace(/\/index\.html$/, '');
          let name = link.replace(/\/$/, '').split('/');
          name = name[name.length - 1].split('-').map(function capitalize(part) {
              return part.charAt(0).toUpperCase() + part.slice(1);
          }).join(' ');
          return <Link active={window.location.pathname === link ? 'active' : ''} to={link} key={o}><i className="mr-2 fa fa-fw fa-folder-open" /> {name}</Link>;
        })}
        {Objects && Objects.filter(obj => obj.match(pathRegex)).filter(obj => !obj.includes('index.html')).sort(a => a.indexOf('.html')).map((obj, o) => {
          if (!obj) return null;
          const link = obj.replace(/\.html$/, '');
          let name = obj.replace(/\/$/, '').split('/');
          name = name[name.length - 1].replace(/\.html$/, '').split('-').map(function capitalize(part) {
              return part.charAt(0).toUpperCase() + part.slice(1);
          }).join(' ');
          return <Link to={link} key={o} active={window.location.pathname === link ? 'active' : ''} style={{ paddingLeft: '2rem' }}><i className={`mr-2 fa fa-fw fa-${obj.includes('.html') ? 'file' : 'folder'}`} /> {name}</Link>;
        })}
      </aside>
      <section className="col h-100 pt-2" dangerouslySetInnerHTML={{ __html: Content || '' }} style={style} />
    </main>
  );
};

export default BucketBlog;