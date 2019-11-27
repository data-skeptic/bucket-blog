'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BucketBlog = function (_Component) {
  (0, _inherits3.default)(BucketBlog, _Component);

  function BucketBlog(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, BucketBlog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BucketBlog.__proto__ || (0, _getPrototypeOf2.default)(BucketBlog)).call(this, props));

    _this.state = {
      Path: undefined,
      Content: undefined,
      Objects: undefined,
      Folder: undefined,
      File: undefined
    };
    (0, _keys2.default)(_this.state).map(function (_key) {
      _this['set' + _key] = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(value) {
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this.updateState(_key, value);

                case 2:
                  return _context.abrupt('return', _context.sent);

                case 3:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
    });
    return _this;
  }

  (0, _createClass3.default)(BucketBlog, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fullUpdate(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps, nextState) {
      this.fullUpdate(nextProps);
    }
  }, {
    key: 'updateState',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(key, value) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.setState((0, _defineProperty3.default)({}, key, value));

              case 2:
                return _context2.abrupt('return', _context2.sent);

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function updateState(_x2, _x3) {
        return _ref2.apply(this, arguments);
      }

      return updateState;
    }()
  }, {
    key: 'getContent',
    value: function getContent(path) {
      var _this3 = this;

      var bucket = this.props.bucket;

      return _axios2.default.get('https://s3.amazonaws.com/' + bucket + path).then(function (_ref3) {
        var data = _ref3.data;
        return _this3.setContent(data);
      }).catch(function () {
        return _this3.setContent();
      });
    }
  }, {
    key: 'fullUpdate',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props) {
        var path;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                path = props.path;
                _context3.next = 3;
                return this.updatePath(path);

              case 3:
                _context3.next = 5;
                return this.updateObjects();

              case 5:
                _context3.next = 7;
                return this.updateFolder();

              case 7:
                _context3.next = 9;
                return this.updateFile();

              case 9:
                return _context3.abrupt('return', _context3.sent);

              case 10:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function fullUpdate(_x4) {
        return _ref4.apply(this, arguments);
      }

      return fullUpdate;
    }()
  }, {
    key: 'updatePath',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(path) {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.setPath(path.substr(1).replace(/\/$/, '').split('/'));

              case 2:
                return _context4.abrupt('return', _context4.sent);

              case 3:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function updatePath(_x5) {
        return _ref5.apply(this, arguments);
      }

      return updatePath;
    }()
  }, {
    key: 'updateObjects',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
        var content, list, objects;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                content = this.props.content;

                if (content) {
                  _context5.next = 3;
                  break;
                }

                return _context5.abrupt('return');

              case 3:
                list = (0, _values2.default)(content || []).map(function (_content) {
                  return _content.Key;
                });
                objects = [];

                list.map(function (_content) {
                  var check = _content.replace(/\/$/, '').split('/');
                  var checked = '';
                  check.map(function (_check) {
                    if (!objects.includes(checked + '/' + _check)) objects.push(checked + '/' + _check);
                    checked = checked + '/' + _check;
                  });
                });
                _context5.next = 8;
                return this.setObjects(objects.sort(function (a, b) {
                  return a < b ? 1 : a > b ? -1 : 0;
                }));

              case 8:
                _context5.next = 10;
                return this.updateFolder();

              case 10:
                return _context5.abrupt('return', _context5.sent);

              case 11:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function updateObjects() {
        return _ref6.apply(this, arguments);
      }

      return updateObjects;
    }()
  }, {
    key: 'updateFolder',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
        var _state, Path, Objects, currentPath;

        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _state = this.state, Path = _state.Path, Objects = _state.Objects;

                if (!(!Path || !Objects)) {
                  _context6.next = 3;
                  break;
                }

                return _context6.abrupt('return');

              case 3:
                currentPath = '/' + Path.join('/');

                if (!Objects.includes(currentPath + '/README.html')) {
                  _context6.next = 12;
                  break;
                }

                _context6.next = 7;
                return this.setFile(currentPath + '/README.html');

              case 7:
                _context6.next = 9;
                return this.setFolder(currentPath + '?/[a-zA-Z0-9._-]+$');

              case 9:
                return _context6.abrupt('return', _context6.sent);

              case 12:
                if (!Objects.includes(currentPath + '.html')) {
                  _context6.next = 20;
                  break;
                }

                _context6.next = 15;
                return this.setFile(currentPath + '.html');

              case 15:
                _context6.next = 17;
                return this.setFolder(currentPath.replace(/\/[a-zA-Z0-9._-]+$/, '') + '?/[a-zA-Z0-9._-]+$');

              case 17:
                return _context6.abrupt('return', _context6.sent);

              case 20:
                if (!Objects.includes(currentPath + '/index.html')) {
                  _context6.next = 28;
                  break;
                }

                _context6.next = 23;
                return this.setFile(currentPath + '/index.html');

              case 23:
                _context6.next = 25;
                return this.setFolder(currentPath + '?/[a-zA-Z0-9._-]+$');

              case 25:
                return _context6.abrupt('return', _context6.sent);

              case 28:
                if (!Objects.includes(currentPath)) {
                  _context6.next = 34;
                  break;
                }

                _context6.next = 31;
                return this.setFile(currentPath);

              case 31:
                _context6.next = 33;
                return this.setFolder(currentPath + '?/[a-zA-Z0-9._-]+$');

              case 33:
                return _context6.abrupt('return', _context6.sent);

              case 34:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateFolder() {
        return _ref7.apply(this, arguments);
      }

      return updateFolder;
    }()
  }, {
    key: 'updateFile',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
        var File;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                File = this.state.File;

                if (!(!File || !File.includes('.html'))) {
                  _context7.next = 3;
                  break;
                }

                return _context7.abrupt('return', this.setContent());

              case 3:
                _context7.next = 5;
                return this.getContent(File);

              case 5:
                return _context7.abrupt('return', _context7.sent);

              case 6:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function updateFile() {
        return _ref8.apply(this, arguments);
      }

      return updateFile;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          Link = _props.Link;
      var _state2 = this.state,
          Content = _state2.Content,
          Objects = _state2.Objects,
          Folder = _state2.Folder;

      var pathRegex = new RegExp(Folder);

      return _react2.default.createElement(
        'main',
        { className: 'BucketBlog' + (className ? ' ' + className : ' row'), style: style },
        _react2.default.createElement(
          'aside',
          { className: 'overflow-auto list-group list-group-flush col p-0 border-right h-100', style: { minWidth: 300, maxWidth: 300 } },
          Objects && window.location.pathname !== '/wiki' && _react2.default.createElement(
            Link,
            { to: window.location.pathname.replace(/\/[a-zA-Z0-9._-]+$/, '') },
            _react2.default.createElement('i', { className: 'mr-2 fa fa-fw fa-level-up' }),
            ' Back'
          ),
          Objects && Objects.filter(function (obj) {
            return obj.match(pathRegex);
          }).filter(function (obj) {
            return obj.includes('index.html');
          }).map(function (obj, o) {
            var link = obj.replace(/\/index\.html$/, '');
            var name = link.replace(/\/$/, '').split('/');
            name = name[name.length - 1].split('-').map(function capitalize(part) {
              return part.charAt(0).toUpperCase() + part.slice(1);
            }).join(' ');
            return _react2.default.createElement(
              Link,
              { active: window.location.pathname === link ? 'active' : '', to: link, key: o },
              _react2.default.createElement('i', { className: 'mr-2 fa fa-fw fa-folder-open' }),
              ' ',
              name
            );
          }),
          Objects && Objects.filter(function (obj) {
            return obj.match(pathRegex);
          }).filter(function (obj) {
            return !obj.includes('index.html');
          }).sort(function (a) {
            return a.indexOf('.html');
          }).filter(function (obj) {
            return !obj.includes('README');
          }).map(function (obj, o) {
            if (!obj) return null;
            var link = obj.replace(/\.html$/, '');
            var name = obj.replace(/\/$/, '').split('/');
            name = name[name.length - 1].replace(/\.html$/, '').split('-').map(function capitalize(part) {
              return part.charAt(0).toUpperCase() + part.slice(1);
            }).join(' ');
            return _react2.default.createElement(
              Link,
              { to: link, key: o, active: window.location.pathname === link ? 'active' : '', style: { paddingLeft: '2rem' } },
              _react2.default.createElement('i', { className: 'mr-2 fa fa-fw fa-' + (obj.includes('.html') ? 'file' : 'folder') }),
              ' ',
              name
            );
          })
        ),
        _react2.default.createElement('section', { className: 'col h-100 pt-2', dangerouslySetInnerHTML: { __html: Content || '' }, style: style })
      );
    }
  }]);
  return BucketBlog;
}(_react.Component);

exports.default = BucketBlog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCdWNrZXRCbG9nIiwicHJvcHMiLCJzdGF0ZSIsIlBhdGgiLCJ1bmRlZmluZWQiLCJDb250ZW50IiwiT2JqZWN0cyIsIkZvbGRlciIsIkZpbGUiLCJtYXAiLCJfa2V5IiwidmFsdWUiLCJ1cGRhdGVTdGF0ZSIsImZ1bGxVcGRhdGUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJrZXkiLCJzZXRTdGF0ZSIsInBhdGgiLCJidWNrZXQiLCJheGlvcyIsImdldCIsInRoZW4iLCJkYXRhIiwic2V0Q29udGVudCIsImNhdGNoIiwidXBkYXRlUGF0aCIsInVwZGF0ZU9iamVjdHMiLCJ1cGRhdGVGb2xkZXIiLCJ1cGRhdGVGaWxlIiwic2V0UGF0aCIsInN1YnN0ciIsInJlcGxhY2UiLCJzcGxpdCIsImNvbnRlbnQiLCJsaXN0IiwiX2NvbnRlbnQiLCJLZXkiLCJvYmplY3RzIiwiY2hlY2siLCJjaGVja2VkIiwiaW5jbHVkZXMiLCJfY2hlY2siLCJwdXNoIiwic2V0T2JqZWN0cyIsInNvcnQiLCJhIiwiYiIsImN1cnJlbnRQYXRoIiwiam9pbiIsInNldEZpbGUiLCJzZXRGb2xkZXIiLCJnZXRDb250ZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJMaW5rIiwicGF0aFJlZ2V4IiwiUmVnRXhwIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJmaWx0ZXIiLCJvYmoiLCJtYXRjaCIsIm8iLCJsaW5rIiwibmFtZSIsImxlbmd0aCIsImNhcGl0YWxpemUiLCJwYXJ0IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImluZGV4T2YiLCJwYWRkaW5nTGVmdCIsIl9faHRtbCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztJQUVNQSxVOzs7QUFDSixzQkFB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dGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY2xhc3MgQnVja2V0QmxvZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBQYXRoOiB1bmRlZmluZWQsXG4gICAgICBDb250ZW50OiB1bmRlZmluZWQsXG4gICAgICBPYmplY3RzOiB1bmRlZmluZWQsXG4gICAgICBGb2xkZXI6IHVuZGVmaW5lZCxcbiAgICAgIEZpbGU6IHVuZGVmaW5lZFxuICAgIH07XG4gICAgT2JqZWN0LmtleXModGhpcy5zdGF0ZSkubWFwKF9rZXkgPT4ge1xuICAgICAgdGhpc1tgc2V0JHtfa2V5fWBdID0gYXN5bmMgdmFsdWUgPT4gYXdhaXQgdGhpcy51cGRhdGVTdGF0ZShfa2V5LCB2YWx1ZSk7XG4gICAgfSk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5mdWxsVXBkYXRlKHRoaXMucHJvcHMpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICB0aGlzLmZ1bGxVcGRhdGUobmV4dFByb3BzKTtcbiAgfVxuICBhc3luYyB1cGRhdGVTdGF0ZShrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuc2V0U3RhdGUoeyBba2V5XTogdmFsdWUgfSk7XG4gIH1cbiAgZ2V0Q29udGVudChwYXRoKSB7XG4gICAgY29uc3QgeyBidWNrZXQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tLyR7YnVja2V0fSR7cGF0aH1gKVxuICAgICAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB0aGlzLnNldENvbnRlbnQoZGF0YSkpXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4gdGhpcy5zZXRDb250ZW50KCkpO1xuICB9XG4gIGFzeW5jIGZ1bGxVcGRhdGUocHJvcHMpIHtcbiAgICBjb25zdCB7IHBhdGggfSA9IHByb3BzO1xuICAgIGF3YWl0IHRoaXMudXBkYXRlUGF0aChwYXRoKTtcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZU9iamVjdHMoKTtcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZUZvbGRlcigpO1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnVwZGF0ZUZpbGUoKTtcbiAgfVxuICBhc3luYyB1cGRhdGVQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5zZXRQYXRoKHBhdGguc3Vic3RyKDEsKS5yZXBsYWNlKC9cXC8kLywgJycpLnNwbGl0KCcvJykpO1xuICB9XG4gIGFzeW5jIHVwZGF0ZU9iamVjdHMoKSB7XG4gICAgY29uc3QgeyBjb250ZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghY29udGVudCkgcmV0dXJuO1xuICAgIGNvbnN0IGxpc3QgPSBPYmplY3QudmFsdWVzKGNvbnRlbnQgfHwgW10pLm1hcChfY29udGVudCA9PiBfY29udGVudC5LZXkpO1xuICAgIGNvbnN0IG9iamVjdHMgPSBbXTtcbiAgICBsaXN0Lm1hcChfY29udGVudCA9PiB7XG4gICAgICBjb25zdCBjaGVjayA9IF9jb250ZW50LnJlcGxhY2UoL1xcLyQvLCAnJykuc3BsaXQoJy8nKTtcbiAgICAgIGxldCBjaGVja2VkID0gJyc7XG4gICAgICBjaGVjay5tYXAoX2NoZWNrID0+IHtcbiAgICAgICAgaWYgKCFvYmplY3RzLmluY2x1ZGVzKGAke2NoZWNrZWR9LyR7X2NoZWNrfWApKSBvYmplY3RzLnB1c2goYCR7Y2hlY2tlZH0vJHtfY2hlY2t9YCk7XG4gICAgICAgIGNoZWNrZWQgPSBgJHtjaGVja2VkfS8ke19jaGVja31gO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgYXdhaXQgdGhpcy5zZXRPYmplY3RzKG9iamVjdHMuc29ydCgoYSwgYikgPT4gYSA8IGIgPyAxIDogYSA+IGIgPyAtMSA6IDApKTtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy51cGRhdGVGb2xkZXIoKTtcbiAgfVxuICBhc3luYyB1cGRhdGVGb2xkZXIoKSB7XG4gICAgY29uc3QgeyBQYXRoLCBPYmplY3RzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICghUGF0aCB8fCAhT2JqZWN0cykgcmV0dXJuO1xuICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gYC8ke1BhdGguam9pbignLycpfWA7XG5cbiAgICBpZiAoT2JqZWN0cy5pbmNsdWRlcyhjdXJyZW50UGF0aCArICcvUkVBRE1FLmh0bWwnKSkge1xuICAgICAgYXdhaXQgdGhpcy5zZXRGaWxlKGN1cnJlbnRQYXRoICsgJy9SRUFETUUuaHRtbCcpO1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2V0Rm9sZGVyKGAke2N1cnJlbnRQYXRofT8vW2EtekEtWjAtOS5fLV0rJGApO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0cy5pbmNsdWRlcyhjdXJyZW50UGF0aCArICcuaHRtbCcpKSB7XG4gICAgICBhd2FpdCB0aGlzLnNldEZpbGUoY3VycmVudFBhdGggKyAnLmh0bWwnKTtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNldEZvbGRlcihgJHtjdXJyZW50UGF0aC5yZXBsYWNlKC9cXC9bYS16QS1aMC05Ll8tXSskLywgJycpfT8vW2EtekEtWjAtOS5fLV0rJGApO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0cy5pbmNsdWRlcyhjdXJyZW50UGF0aCArICcvaW5kZXguaHRtbCcpKSB7XG4gICAgICBhd2FpdCB0aGlzLnNldEZpbGUoY3VycmVudFBhdGggKyAnL2luZGV4Lmh0bWwnKTtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNldEZvbGRlcihgJHtjdXJyZW50UGF0aH0/L1thLXpBLVowLTkuXy1dKyRgKTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdHMuaW5jbHVkZXMoY3VycmVudFBhdGgpKSB7XG4gICAgICBhd2FpdCB0aGlzLnNldEZpbGUoY3VycmVudFBhdGgpO1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2V0Rm9sZGVyKGAke2N1cnJlbnRQYXRofT8vW2EtekEtWjAtOS5fLV0rJGApO1xuICAgIH1cbiAgfVxuICBhc3luYyB1cGRhdGVGaWxlKCkge1xuICAgIGNvbnN0IHsgRmlsZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoIUZpbGUgfHwgIUZpbGUuaW5jbHVkZXMoJy5odG1sJykpIHJldHVybiB0aGlzLnNldENvbnRlbnQoKTtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXRDb250ZW50KEZpbGUpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgc3R5bGUsIExpbmsgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBDb250ZW50LCBPYmplY3RzLCBGb2xkZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgcGF0aFJlZ2V4ID0gbmV3IFJlZ0V4cChGb2xkZXIpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17YEJ1Y2tldEJsb2cke2NsYXNzTmFtZSA/IGAgJHtjbGFzc05hbWV9YCA6ICcgcm93J31gfSBzdHlsZT17c3R5bGV9PlxuICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwib3ZlcmZsb3ctYXV0byBsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2ggY29sIHAtMCBib3JkZXItcmlnaHQgaC0xMDBcIiBzdHlsZT17eyBtaW5XaWR0aDozMDAsIG1heFdpZHRoOiAzMDAgfX0+XG4gICAgICAgICAge09iamVjdHMgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSAnL3dpa2knICYmIDxMaW5rIHRvPXt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW2EtekEtWjAtOS5fLV0rJC8sICcnKX0+PGkgY2xhc3NOYW1lPVwibXItMiBmYSBmYS1mdyBmYS1sZXZlbC11cFwiIC8+IEJhY2s8L0xpbms+fVxuICAgICAgICAgIHtPYmplY3RzICYmIE9iamVjdHMuZmlsdGVyKG9iaiA9PiBvYmoubWF0Y2gocGF0aFJlZ2V4KSkuZmlsdGVyKG9iaiA9PiBvYmouaW5jbHVkZXMoJ2luZGV4Lmh0bWwnKSkubWFwKChvYmosIG8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBvYmoucmVwbGFjZSgvXFwvaW5kZXhcXC5odG1sJC8sICcnKTtcbiAgICAgICAgICAgIGxldCBuYW1lID0gbGluay5yZXBsYWNlKC9cXC8kLywgJycpLnNwbGl0KCcvJyk7XG4gICAgICAgICAgICBuYW1lID0gbmFtZVtuYW1lLmxlbmd0aCAtIDFdLnNwbGl0KCctJykubWFwKGZ1bmN0aW9uIGNhcGl0YWxpemUocGFydCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJ0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcGFydC5zbGljZSgxKTtcbiAgICAgICAgICAgIH0pLmpvaW4oJyAnKTtcbiAgICAgICAgICAgIHJldHVybiA8TGluayBhY3RpdmU9e3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gbGluayA/ICdhY3RpdmUnIDogJyd9IHRvPXtsaW5rfSBrZXk9e299PjxpIGNsYXNzTmFtZT1cIm1yLTIgZmEgZmEtZncgZmEtZm9sZGVyLW9wZW5cIiAvPiB7bmFtZX08L0xpbms+O1xuICAgICAgICAgIH0pfVxuICAgICAgICAgIHtPYmplY3RzICYmIE9iamVjdHMuZmlsdGVyKG9iaiA9PiBvYmoubWF0Y2gocGF0aFJlZ2V4KSkuZmlsdGVyKG9iaiA9PiAhb2JqLmluY2x1ZGVzKCdpbmRleC5odG1sJykpLnNvcnQoYSA9PiBhLmluZGV4T2YoJy5odG1sJykpLmZpbHRlcihvYmogPT4gIW9iai5pbmNsdWRlcygnUkVBRE1FJykpLm1hcCgob2JqLCBvKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9iaikgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBjb25zdCBsaW5rID0gb2JqLnJlcGxhY2UoL1xcLmh0bWwkLywgJycpO1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBvYmoucmVwbGFjZSgvXFwvJC8sICcnKS5zcGxpdCgnLycpO1xuICAgICAgICAgICAgbmFtZSA9IG5hbWVbbmFtZS5sZW5ndGggLSAxXS5yZXBsYWNlKC9cXC5odG1sJC8sICcnKS5zcGxpdCgnLScpLm1hcChmdW5jdGlvbiBjYXBpdGFsaXplKHBhcnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFydC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHBhcnQuc2xpY2UoMSk7XG4gICAgICAgICAgICB9KS5qb2luKCcgJyk7XG4gICAgICAgICAgICByZXR1cm4gPExpbmsgdG89e2xpbmt9IGtleT17b30gYWN0aXZlPXt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IGxpbmsgPyAnYWN0aXZlJyA6ICcnfSBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzJyZW0nIH19PjxpIGNsYXNzTmFtZT17YG1yLTIgZmEgZmEtZncgZmEtJHtvYmouaW5jbHVkZXMoJy5odG1sJykgPyAnZmlsZScgOiAnZm9sZGVyJ31gfSAvPiB7bmFtZX08L0xpbms+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2FzaWRlPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb2wgaC0xMDAgcHQtMlwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogQ29udGVudCB8fCAnJyB9fSBzdHlsZT17c3R5bGV9IC8+XG4gICAgICA8L21haW4+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdWNrZXRCbG9nOyJdfQ==