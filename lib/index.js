'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var BucketBlog = function BucketBlog(_ref) {
  var bucket = _ref.bucket,
      content = _ref.content,
      className = _ref.className,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style;

  if (!root && !content) throw new Error('No "root" or "content" property provided. Cannot get content.');

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      Path = _useState2[0],
      setPath = _useState2[1];

  var _useState3 = (0, _react.useState)(content),
      _useState4 = _slicedToArray(_useState3, 2),
      Content = _useState4[0],
      setContent = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      Objects = _useState6[0],
      setObjects = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      Folder = _useState8[0],
      setFolder = _useState8[1];

  var _useState9 = (0, _react.useState)(),
      _useState10 = _slicedToArray(_useState9, 2),
      File = _useState10[0],
      setFile = _useState10[1];

  var getContent = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(path) {
      var _ref3, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _axios2.default.get('https://s3.amazonaws.com/' + bucket + path);

            case 2:
              _ref3 = _context.sent;
              data = _ref3.data;

              setContent(data);

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function getContent(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    setContent(Object.values(content || {}).map(function (_content) {
      return _content.Key;
    }));
  }, [content]);
  (0, _react.useEffect)(function () {
    var objects = [];
    content.map(function (_content) {
      var check = _content.replace(/\/$/, '').split('/');
      var checked = '';
      check.map(function (_check) {
        if (!objects.includes(checked + '/' + _check)) objects.push(checked + '/' + _check);
        checked = checked + '/' + _check;
      });
    });
    setObjects(objects.sort(function (a, b) {
      return a < b ? 1 : a > b ? -1 : 0;
    }));
  }, [Content]);
  (0, _react.useEffect)(function () {
    setPath(window.location.pathname.substr(1).replace(/\/$/, '').split('/'));
    if (Objects.includes(window.location.pathname + '.html')) {
      setFile(window.location.pathname + '.html');
      setFolder(window.location.pathname.replace(/\/[a-zA-Z0-9._-]+$/, '') + '?/[a-zA-Z0-9._-]+$');
    } else if (Objects.includes(window.location.pathname + '/index.html')) {
      setFile(window.location.pathname + '/index.html');
      setFolder(window.location.pathname + '?/[a-zA-Z0-9._-]+$');
    } else if (Objects.includes(window.location.pathname)) {
      setFile(window.location.pathname);
      setFolder(window.location.pathname + '?/[a-zA-Z0-9._-]+$');
    }
  }, [window.location.pathname, Objects]);
  (0, _react.useEffect)(function () {
    if (!File) return setContent();
    getContent(File);
  }, [File]);

  return _react2.default.createElement('main', { className: 'BucketBlog' + (className ? ' ' + className : ''), dangerouslySetInnerHTML: { __html: Content }, style: style });
};

exports.default = BucketBlog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJ1Y2tldEJsb2ciLCJidWNrZXQiLCJjb250ZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJyb290IiwiRXJyb3IiLCJQYXRoIiwic2V0UGF0aCIsIkNvbnRlbnQiLCJzZXRDb250ZW50IiwiT2JqZWN0cyIsInNldE9iamVjdHMiLCJGb2xkZXIiLCJzZXRGb2xkZXIiLCJGaWxlIiwic2V0RmlsZSIsImdldENvbnRlbnQiLCJwYXRoIiwiYXhpb3MiLCJnZXQiLCJkYXRhIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwiX2NvbnRlbnQiLCJLZXkiLCJvYmplY3RzIiwiY2hlY2siLCJyZXBsYWNlIiwic3BsaXQiLCJjaGVja2VkIiwiaW5jbHVkZXMiLCJfY2hlY2siLCJwdXNoIiwic29ydCIsImEiLCJiIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInN1YnN0ciIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWEsU0FBYkEsVUFBYSxPQUtiO0FBQUEsTUFKSkMsTUFJSSxRQUpKQSxNQUlJO0FBQUEsTUFISkMsT0FHSSxRQUhKQSxPQUdJO0FBQUEsTUFGSkMsU0FFSSxRQUZKQSxTQUVJO0FBQUEsd0JBREpDLEtBQ0k7QUFBQSxNQURKQSxLQUNJLDhCQURJLEVBQ0o7O0FBQ0osTUFBSSxDQUFDQyxJQUFELElBQVMsQ0FBQ0gsT0FBZCxFQUF1QixNQUFNLElBQUlJLEtBQUosQ0FBVSwrREFBVixDQUFOOztBQURuQixrQkFFMEIsc0JBRjFCO0FBQUE7QUFBQSxNQUVHQyxJQUZIO0FBQUEsTUFFU0MsT0FGVDs7QUFBQSxtQkFHMEIscUJBQVNOLE9BQVQsQ0FIMUI7QUFBQTtBQUFBLE1BR0dPLE9BSEg7QUFBQSxNQUdZQyxVQUhaOztBQUFBLG1CQUkwQixzQkFKMUI7QUFBQTtBQUFBLE1BSUdDLE9BSkg7QUFBQSxNQUlZQyxVQUpaOztBQUFBLG1C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QUFVLFlBQU07QUFDZCxRQUFJLENBQUNJLElBQUwsRUFBVyxPQUFPTCxZQUFQO0FBQ1hPLGVBQVdGLElBQVg7QUFDRCxHQUhELEVBR0csQ0FBQ0EsSUFBRCxDQUhIOztBQUtBLFNBQU8sd0NBQU0sMkJBQXdCWixrQkFBZ0JBLFNBQWhCLEdBQThCLEVBQXRELENBQU4sRUFBa0UseUJBQXlCLEVBQUV1QyxRQUFRakMsT0FBVixFQUEzRixFQUFnSCxPQUFPTCxLQUF2SCxHQUFQO0FBQ0QsQ0FwREQ7O2tCQXNEZUosVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgQnVja2V0QmxvZyA9ICh7XHJcbiAgYnVja2V0LFxyXG4gIGNvbnRlbnQsXHJcbiAgY2xhc3NOYW1lLFxyXG4gIHN0eWxlID0ge31cclxufSkgPT4ge1xyXG4gIGlmICghcm9vdCAmJiAhY29udGVudCkgdGhyb3cgbmV3IEVycm9yKCdObyBcInJvb3RcIiBvciBcImNvbnRlbnRcIiBwcm9wZXJ0eSBwcm92aWRlZC4gQ2Fubm90IGdldCBjb250ZW50LicpO1xyXG4gIGNvbnN0IFtQYXRoLCBzZXRQYXRoXSAgICAgICA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW0NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoY29udGVudCk7XHJcbiAgY29uc3QgW09iamVjdHMsIHNldE9iamVjdHNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbRm9sZGVyLCBzZXRGb2xkZXJdICAgPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtGaWxlLCBzZXRGaWxlXSAgICAgICA9IHVzZVN0YXRlKCk7XHJcbiAgXHJcbiAgY29uc3QgZ2V0Q29udGVudCAgICAgICAgICAgID0gYXN5bmMgcGF0aCA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tLyR7YnVja2V0fSR7cGF0aH1gKTtcclxuICAgIHNldENvbnRlbnQoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldENvbnRlbnQoT2JqZWN0LnZhbHVlcyhjb250ZW50IHx8IHt9KS5tYXAoX2NvbnRlbnQgPT4gX2NvbnRlbnQuS2V5KSlcclxuICB9LCBbY29udGVudF0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBvYmplY3RzID0gW107XHJcbiAgICBjb250ZW50Lm1hcChfY29udGVudCA9PiB7XHJcbiAgICAgIGNvbnN0IGNoZWNrID0gX2NvbnRlbnQucmVwbGFjZSgvXFwvJC8sICcnKS5zcGxpdCgnLycpO1xyXG4gICAgICBsZXQgY2hlY2tlZCA9ICcnO1xyXG4gICAgICBjaGVjay5tYXAoX2NoZWNrID0+IHtcclxuICAgICAgICBpZiAoIW9iamVjdHMuaW5jbHVkZXMoYCR7Y2hlY2tlZH0vJHtfY2hlY2t9YCkpIG9iamVjdHMucHVzaChgJHtjaGVja2VkfS8ke19jaGVja31gKTtcclxuICAgICAgICBjaGVja2VkID0gYCR7Y2hlY2tlZH0vJHtfY2hlY2t9YDtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHNldE9iamVjdHMob2JqZWN0cy5zb3J0KChhLCBiKSA9PiBhIDwgYiA/IDEgOiBhID4gYiA/IC0xIDogMCkpO1xyXG4gIH0sIFtDb250ZW50XSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFBhdGgod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN1YnN0cigxLCkucmVwbGFjZSgvXFwvJC8sICcnKS5zcGxpdCgnLycpKTtcclxuICAgIGlmIChPYmplY3RzLmluY2x1ZGVzKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArICcuaHRtbCcpKSB7XHJcbiAgICAgIHNldEZpbGUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgJy5odG1sJyk7XHJcbiAgICAgIHNldEZvbGRlcihgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW2EtekEtWjAtOS5fLV0rJC8sICcnKX0/L1thLXpBLVowLTkuXy1dKyRgKTtcclxuICAgIH0gZWxzZSBpZiAoT2JqZWN0cy5pbmNsdWRlcyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyAnL2luZGV4Lmh0bWwnKSkge1xyXG4gICAgICBzZXRGaWxlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArICcvaW5kZXguaHRtbCcpO1xyXG4gICAgICBzZXRGb2xkZXIoYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfT8vW2EtekEtWjAtOS5fLV0rJGApO1xyXG4gICAgfSBlbHNlIGlmIChPYmplY3RzLmluY2x1ZGVzKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkpIHtcclxuICAgICAgc2V0RmlsZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgICBzZXRGb2xkZXIoYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfT8vW2EtekEtWjAtOS5fLV0rJGApO1xyXG4gICAgfVxyXG4gIH0sIFt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsIE9iamVjdHNdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFGaWxlKSByZXR1cm4gc2V0Q29udGVudCgpO1xyXG4gICAgZ2V0Q29udGVudChGaWxlKTtcclxuICB9LCBbRmlsZV0pO1xyXG5cclxuICByZXR1cm4gPG1haW4gY2xhc3NOYW1lPXtgQnVja2V0QmxvZyR7Y2xhc3NOYW1lID8gYCAke2NsYXNzTmFtZX1gIDogJyd9YH0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBDb250ZW50IH19IHN0eWxlPXtzdHlsZX0gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdWNrZXRCbG9nOyJdfQ==