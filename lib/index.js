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

                if (!Objects.includes(currentPath + '.html')) {
                  _context6.next = 12;
                  break;
                }

                _context6.next = 7;
                return this.setFile(currentPath + '.html');

              case 7:
                _context6.next = 9;
                return this.setFolder(currentPath.replace(/\/[a-zA-Z0-9._-]+$/, '') + '?/[a-zA-Z0-9._-]+$');

              case 9:
                return _context6.abrupt('return', _context6.sent);

              case 12:
                if (!Objects.includes(currentPath + '/index.html')) {
                  _context6.next = 20;
                  break;
                }

                _context6.next = 15;
                return this.setFile(currentPath + '/index.html');

              case 15:
                _context6.next = 17;
                return this.setFolder(currentPath + '?/[a-zA-Z0-9._-]+$');

              case 17:
                return _context6.abrupt('return', _context6.sent);

              case 20:
                if (!Objects.includes(currentPath)) {
                  _context6.next = 26;
                  break;
                }

                _context6.next = 23;
                return this.setFile(currentPath);

              case 23:
                _context6.next = 25;
                return this.setFolder(currentPath + '?/[a-zA-Z0-9._-]+$');

              case 25:
                return _context6.abrupt('return', _context6.sent);

              case 26:
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
          { className: 'list-group list-group-flush col p-0 border-right h-100', style: { minWidth: 300, maxWidth: 300 } },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCdWNrZXRCbG9nIiwicHJvcHMiLCJzdGF0ZSIsIlBhdGgiLCJ1bmRlZmluZWQiLCJDb250ZW50IiwiT2JqZWN0cyIsIkZvbGRlciIsIkZpbGUiLCJtYXAiLCJfa2V5IiwidmFsdWUiLCJ1cGRhdGVTdGF0ZSIsImZ1bGxVcGRhdGUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJrZXkiLCJzZXRTdGF0ZSIsInBhdGgiLCJidWNrZXQiLCJheGlvcyIsImdldCIsInRoZW4iLCJkYXRhIiwic2V0Q29udGVudCIsImNhdGNoIiwidXBkYXRlUGF0aCIsInVwZGF0ZU9iamVjdHMiLCJ1cGRhdGVGb2xkZXIiLCJ1cGRhdGVGaWxlIiwic2V0UGF0aCIsInN1YnN0ciIsInJlcGxhY2UiLCJzcGxpdCIsImNvbnRlbnQiLCJsaXN0IiwiX2NvbnRlbnQiLCJLZXkiLCJvYmplY3RzIiwiY2hlY2siLCJjaGVja2VkIiwiaW5jbHVkZXMiLCJfY2hlY2siLCJwdXNoIiwic2V0T2JqZWN0cyIsInNvcnQiLCJhIiwiYiIsImN1cnJlbnRQYXRoIiwiam9pbiIsInNldEZpbGUiLCJzZXRGb2xkZXIiLCJnZXRDb250ZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJMaW5rIiwicGF0aFJlZ2V4IiwiUmVnRXhwIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJmaWx0ZXIiLCJvYmoiLCJtYXRjaCIsIm8iLCJsaW5rIiwibmFtZSIsImxlbmd0aCIsImNhcGl0YWxpemUiLCJwYXJ0IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImluZGV4T2YiLCJwYWRkaW5nTGVmdCIsIl9faHRtbCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztJQUVNQSxVOzs7QUFDSixzQkFB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QUFPQSxLQUFLQSxLQUFLQyxNQUFMLEdBQWMsQ0FBbkIsRUFBc0JyQyxPQUF0QixDQUE4QixTQUE5QixFQUF5QyxFQUF6QyxFQUE2Q0MsS0FBN0MsQ0FBbUQsR0FBbkQsRUFBd0R4QixHQUF4RCxDQUE0RCxTQUFTNkQsVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEI7QUFDekYscUJBQU9BLEtBQUtDLE1BQUwsQ0FBWSxDQUFaLEVBQWVDLFdBQWYsS0FBK0JGLEtBQUtHLEtBQUwsQ0FBVyxDQUFYLENBQXRDO0FBQ0gsYUFGTSxFQUVKekIsSUFGSSxDQUVDLEdBRkQsQ0FBUDtBQUdBLG1CQUFPO0FBQUMsa0JBQUQ7QUFBQSxnQkFBTSxJQUFJa0IsSUFBVixFQUFnQixLQUFLRCxDQUFyQixFQUF3QixRQUFRTixPQUFPQyxRQUFQLENBQWdCQyxRQUFoQixLQUE2QkssSUFBN0IsR0FBb0MsUUFBcEMsR0FBK0MsRUFBL0UsRUFBbUYsT0FBTyxFQUFFUyxhQUFhLE1BQWYsRUFBMUY7QUFBbUgsbURBQUcsa0NBQStCWixJQUFJdkIsUUFBSixDQUFhLE9BQWIsSUFBd0IsTUFBeEIsR0FBaUMsUUFBaEUsQ0FBSCxHQUFuSDtBQUFBO0FBQXNNMkI7QUFBdE0sYUFBUDtBQUNELFdBUlc7QUFWZCxTQURGO0FBcUJFLG1EQUFTLFdBQVUsZ0JBQW5CLEVBQW9DLHlCQUF5QixFQUFFUyxRQUFReEUsV0FBVyxFQUFyQixFQUE3RCxFQUF3RixPQUFPaUQsS0FBL0Y7QUFyQkYsT0FERjtBQXlCRDs7O0VBMUdzQndCLGdCOztrQkE2R1Y5RSxVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIEJ1Y2tldEJsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBQYXRoOiB1bmRlZmluZWQsXHJcbiAgICAgIENvbnRlbnQ6IHVuZGVmaW5lZCxcclxuICAgICAgT2JqZWN0czogdW5kZWZpbmVkLFxyXG4gICAgICBGb2xkZXI6IHVuZGVmaW5lZCxcclxuICAgICAgRmlsZTogdW5kZWZpbmVkXHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5zdGF0ZSkubWFwKF9rZXkgPT4ge1xyXG4gICAgICB0aGlzW2BzZXQke19rZXl9YF0gPSBhc3luYyB2YWx1ZSA9PiBhd2FpdCB0aGlzLnVwZGF0ZVN0YXRlKF9rZXksIHZhbHVlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuZnVsbFVwZGF0ZSh0aGlzLnByb3BzKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xyXG4gICAgdGhpcy5mdWxsVXBkYXRlKG5leHRQcm9wcyk7XHJcbiAgfVxyXG4gIGFzeW5jIHVwZGF0ZVN0YXRlKGtleSwgdmFsdWUpIHtcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLnNldFN0YXRlKHsgW2tleV06IHZhbHVlIH0pO1xyXG4gIH1cclxuICBnZXRDb250ZW50KHBhdGgpIHtcclxuICAgIGNvbnN0IHsgYnVja2V0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tLyR7YnVja2V0fSR7cGF0aH1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHRoaXMuc2V0Q29udGVudChkYXRhKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHRoaXMuc2V0Q29udGVudCgpKTtcclxuICB9XHJcbiAgYXN5bmMgZnVsbFVwZGF0ZShwcm9wcykge1xyXG4gICAgY29uc3QgeyBwYXRoIH0gPSBwcm9wcztcclxuICAgIGF3YWl0IHRoaXMudXBkYXRlUGF0aChwYXRoKTtcclxuICAgIGF3YWl0IHRoaXMudXBkYXRlT2JqZWN0cygpO1xyXG4gICAgYXdhaXQgdGhpcy51cGRhdGVGb2xkZXIoKTtcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLnVwZGF0ZUZpbGUoKTtcclxuICB9XHJcbiAgYXN5bmMgdXBkYXRlUGF0aChwYXRoKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5zZXRQYXRoKHBhdGguc3Vic3RyKDEsKS5yZXBsYWNlKC9cXC8kLywgJycpLnNwbGl0KCcvJykpO1xyXG4gIH1cclxuICBhc3luYyB1cGRhdGVPYmplY3RzKCkge1xyXG4gICAgY29uc3QgeyBjb250ZW50IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgaWYgKCFjb250ZW50KSByZXR1cm47XHJcbiAgICBjb25zdCBsaXN0ID0gT2JqZWN0LnZhbHVlcyhjb250ZW50IHx8IFtdKS5tYXAoX2NvbnRlbnQgPT4gX2NvbnRlbnQuS2V5KTtcclxuICAgIGNvbnN0IG9iamVjdHMgPSBbXTtcclxuICAgIGxpc3QubWFwKF9jb250ZW50ID0+IHtcclxuICAgICAgY29uc3QgY2hlY2sgPSBfY29udGVudC5yZXBsYWNlKC9cXC8kLywgJycpLnNwbGl0KCcvJyk7XHJcbiAgICAgIGxldCBjaGVja2VkID0gJyc7XHJcbiAgICAgIGNoZWNrLm1hcChfY2hlY2sgPT4ge1xyXG4gICAgICAgIGlmICghb2JqZWN0cy5pbmNsdWRlcyhgJHtjaGVja2VkfS8ke19jaGVja31gKSkgb2JqZWN0cy5wdXNoKGAke2NoZWNrZWR9LyR7X2NoZWNrfWApO1xyXG4gICAgICAgIGNoZWNrZWQgPSBgJHtjaGVja2VkfS8ke19jaGVja31gO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgYXdhaXQgdGhpcy5zZXRPYmplY3RzKG9iamVjdHMuc29ydCgoYSwgYikgPT4gYSA8IGIgPyAxIDogYSA+IGIgPyAtMSA6IDApKTtcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLnVwZGF0ZUZvbGRlcigpO1xyXG4gIH1cclxuICBhc3luYyB1cGRhdGVGb2xkZXIoKSB7XHJcbiAgICBjb25zdCB7IFBhdGgsIE9iamVjdHMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBpZiAoIVBhdGggfHwgIU9iamVjdHMpIHJldHVybjtcclxuICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gYC8ke1BhdGguam9pbignLycpfWA7XHJcblxyXG4gICAgaWYgKE9iamVjdHMuaW5jbHVkZXMoY3VycmVudFBhdGggKyAnLmh0bWwnKSkge1xyXG4gICAgICBhd2FpdCB0aGlzLnNldEZpbGUoY3VycmVudFBhdGggKyAnLmh0bWwnKTtcclxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2V0Rm9sZGVyKGAke2N1cnJlbnRQYXRoLnJlcGxhY2UoL1xcL1thLXpBLVowLTkuXy1dKyQvLCAnJyl9Py9bYS16QS1aMC05Ll8tXSskYCk7XHJcbiAgICB9IGVsc2UgaWYgKE9iamVjdHMuaW5jbHVkZXMoY3VycmVudFBhdGggKyAnL2luZGV4Lmh0bWwnKSkge1xyXG4gICAgICBhd2FpdCB0aGlzLnNldEZpbGUoY3VycmVudFBhdGggKyAnL2luZGV4Lmh0bWwnKTtcclxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2V0Rm9sZGVyKGAke2N1cnJlbnRQYXRofT8vW2EtekEtWjAtOS5fLV0rJGApO1xyXG4gICAgfSBlbHNlIGlmIChPYmplY3RzLmluY2x1ZGVzKGN1cnJlbnRQYXRoKSkge1xyXG4gICAgICBhd2FpdCB0aGlzLnNldEZpbGUoY3VycmVudFBhdGgpO1xyXG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZXRGb2xkZXIoYCR7Y3VycmVudFBhdGh9Py9bYS16QS1aMC05Ll8tXSskYCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIHVwZGF0ZUZpbGUoKSB7XHJcbiAgICBjb25zdCB7IEZpbGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBpZiAoIUZpbGUgfHwgIUZpbGUuaW5jbHVkZXMoJy5odG1sJykpIHJldHVybiB0aGlzLnNldENvbnRlbnQoKTtcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLmdldENvbnRlbnQoRmlsZSk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBzdHlsZSwgTGluayB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHsgQ29udGVudCwgT2JqZWN0cywgRm9sZGVyIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgcGF0aFJlZ2V4ID0gbmV3IFJlZ0V4cChGb2xkZXIpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17YEJ1Y2tldEJsb2cke2NsYXNzTmFtZSA/IGAgJHtjbGFzc05hbWV9YCA6ICcgcm93J31gfSBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2ggY29sIHAtMCBib3JkZXItcmlnaHQgaC0xMDBcIiBzdHlsZT17eyBtaW5XaWR0aDozMDAsIG1heFdpZHRoOiAzMDAgfX0+XHJcbiAgICAgICAgICB7T2JqZWN0cyAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgIT09ICcvd2lraScgJiYgPExpbmsgdG89e3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bYS16QS1aMC05Ll8tXSskLywgJycpfT48aSBjbGFzc05hbWU9XCJtci0yIGZhIGZhLWZ3IGZhLWxldmVsLXVwXCIgLz4gQmFjazwvTGluaz59XHJcbiAgICAgICAgICB7T2JqZWN0cyAmJiBPYmplY3RzLmZpbHRlcihvYmogPT4gb2JqLm1hdGNoKHBhdGhSZWdleCkpLmZpbHRlcihvYmogPT4gb2JqLmluY2x1ZGVzKCdpbmRleC5odG1sJykpLm1hcCgob2JqLCBvKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBvYmoucmVwbGFjZSgvXFwvaW5kZXhcXC5odG1sJC8sICcnKTtcclxuICAgICAgICAgICAgbGV0IG5hbWUgPSBsaW5rLnJlcGxhY2UoL1xcLyQvLCAnJykuc3BsaXQoJy8nKTtcclxuICAgICAgICAgICAgbmFtZSA9IG5hbWVbbmFtZS5sZW5ndGggLSAxXS5zcGxpdCgnLScpLm1hcChmdW5jdGlvbiBjYXBpdGFsaXplKHBhcnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJ0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcGFydC5zbGljZSgxKTtcclxuICAgICAgICAgICAgfSkuam9pbignICcpO1xyXG4gICAgICAgICAgICByZXR1cm4gPExpbmsgYWN0aXZlPXt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IGxpbmsgPyAnYWN0aXZlJyA6ICcnfSB0bz17bGlua30ga2V5PXtvfT48aSBjbGFzc05hbWU9XCJtci0yIGZhIGZhLWZ3IGZhLWZvbGRlci1vcGVuXCIgLz4ge25hbWV9PC9MaW5rPjtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgICAge09iamVjdHMgJiYgT2JqZWN0cy5maWx0ZXIob2JqID0+IG9iai5tYXRjaChwYXRoUmVnZXgpKS5maWx0ZXIob2JqID0+ICFvYmouaW5jbHVkZXMoJ2luZGV4Lmh0bWwnKSkuc29ydChhID0+IGEuaW5kZXhPZignLmh0bWwnKSkubWFwKChvYmosIG8pID0+IHtcclxuICAgICAgICAgICAgaWYgKCFvYmopIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBjb25zdCBsaW5rID0gb2JqLnJlcGxhY2UoL1xcLmh0bWwkLywgJycpO1xyXG4gICAgICAgICAgICBsZXQgbmFtZSA9IG9iai5yZXBsYWNlKC9cXC8kLywgJycpLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lW25hbWUubGVuZ3RoIC0gMV0ucmVwbGFjZSgvXFwuaHRtbCQvLCAnJykuc3BsaXQoJy0nKS5tYXAoZnVuY3Rpb24gY2FwaXRhbGl6ZShwYXJ0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFydC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHBhcnQuc2xpY2UoMSk7XHJcbiAgICAgICAgICAgIH0pLmpvaW4oJyAnKTtcclxuICAgICAgICAgICAgcmV0dXJuIDxMaW5rIHRvPXtsaW5rfSBrZXk9e299IGFjdGl2ZT17d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSBsaW5rID8gJ2FjdGl2ZScgOiAnJ30gc3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICcycmVtJyB9fT48aSBjbGFzc05hbWU9e2Btci0yIGZhIGZhLWZ3IGZhLSR7b2JqLmluY2x1ZGVzKCcuaHRtbCcpID8gJ2ZpbGUnIDogJ2ZvbGRlcid9YH0gLz4ge25hbWV9PC9MaW5rPjtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29sIGgtMTAwIHB0LTJcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IENvbnRlbnQgfHwgJycgfX0gc3R5bGU9e3N0eWxlfSAvPlxyXG4gICAgICA8L21haW4+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVja2V0QmxvZzsiXX0=