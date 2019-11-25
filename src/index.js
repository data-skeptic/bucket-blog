import React, { Component } from 'react';
import axios from 'axios';

class BucketBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Path: undefined,
      Content: undefined,
      Objects: undefined,
      Folder: undefined,
      File: undefined
    };
    Object.keys(this.state).map(_key => {
      this[`set${_key}`] = async value => await this.updateState(_key, value);
    });
  }
  componentDidMount() {
    this.fullUpdate(this.props);
  }
  componentWillReceiveProps(nextProps, nextState) {
    this.fullUpdate(nextProps);
  }
  async updateState(key, value) {
    return await this.setState({ [key]: value });
  }
  getContent(path) {
    const { bucket } = this.props;
    return axios.get(`https://s3.amazonaws.com/${bucket}${path}`)
            .then(({ data }) => this.setContent(data))
            .catch(() => this.setContent());
  }
  async fullUpdate(props) {
    const { path } = props;
    await this.updatePath(path);
    await this.updateObjects();
    await this.updateFolder();
    return await this.updateFile();
  }
  async updatePath(path) {
    return await this.setPath(path.substr(1,).replace(/\/$/, '').split('/'));
  }
  async updateObjects() {
    const { content } = this.props;
    if (!content) return;
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
    await this.setObjects(objects.sort((a, b) => a < b ? 1 : a > b ? -1 : 0));
    return await this.updateFolder();
  }
  async updateFolder() {
    const { Path, Objects } = this.state;
    if (!Path || !Objects) return;
    const currentPath = `/${Path.join('/')}`;

    if (Objects.includes(currentPath + '.html')) {
      await this.setFile(currentPath + '.html');
      return await this.setFolder(`${currentPath.replace(/\/[a-zA-Z0-9._-]+$/, '')}?/[a-zA-Z0-9._-]+$`);
    } else if (Objects.includes(currentPath + '/README.html')) {
      await this.setFile(currentPath + '/README.html');
    } else if (Objects.includes(currentPath + '/index.html')) {
      await this.setFile(currentPath + '/index.html');
      return await this.setFolder(`${currentPath}?/[a-zA-Z0-9._-]+$`);
    } else if (Objects.includes(currentPath)) {
      await this.setFile(currentPath);
      return await this.setFolder(`${currentPath}?/[a-zA-Z0-9._-]+$`);
    }
  }
  async updateFile() {
    const { File } = this.state;
    if (!File || !File.includes('.html')) return this.setContent();
    return await this.getContent(File);
  }
  render() {
    const { className, style, Link } = this.props;
    const { Content, Objects, Folder } = this.state;
    const pathRegex = new RegExp(Folder);

    return (
      <main className={`BucketBlog${className ? ` ${className}` : ' row'}`} style={style}>
        <aside className="overflow-auto list-group list-group-flush col p-0 border-right h-100" style={{ minWidth:300, maxWidth: 300 }}>
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
  }
}

export default BucketBlog;