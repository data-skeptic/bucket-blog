'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BucketBlog = function BucketBlog(_ref) {
  var bucket = _ref.bucket,
      content = _ref.content,
      className = _ref.className,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      Link = _ref.Link;

  // if (!content) throw new Error('No "root" or "content" property provided. Cannot get content.');
  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      Path = _useState2[0],
      setPath = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray3.default)(_useState3, 2),
      Content = _useState4[0],
      setContent = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = (0, _slicedToArray3.default)(_useState5, 2),
      Objects = _useState6[0],
      setObjects = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = (0, _slicedToArray3.default)(_useState7, 2),
      Folder = _useState8[0],
      setFolder = _useState8[1];

  var _useState9 = (0, _react.useState)(),
      _useState10 = (0, _slicedToArray3.default)(_useState9, 2),
      File = _useState10[0],
      setFile = _useState10[1];

  var getContent = function getContent(path) {
    return _axios2.default.get('https://s3.amazonaws.com/' + bucket + path).then(function (_ref2) {
      var data = _ref2.data;
      return setContent(data);
    }).catch(function () {
      return setContent();
    });
  };

  (0, _react.useEffect)(function () {
    setPath(window.location.pathname.substr(1).replace(/\/$/, '').split('/'));
  }, [window.location.pathname]);
  (0, _react.useEffect)(function () {
    var list = (0, _values2.default)(content || []).map(function (_content) {
      return _content.Key;
    });
    var objects = [];
    list.map(function (_content) {
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
  }, [content]);
  (0, _react.useEffect)(function () {
    if (!Path || !Objects) return;
    var currentPath = '/' + Path.join('/');
    if (Objects.includes(currentPath + '.html')) {
      setFile(currentPath + '.html');
      setFolder(currentPath.replace(/\/[a-zA-Z0-9._-]+$/, '') + '?/[a-zA-Z0-9._-]+$');
    } else if (Objects.includes(currentPath + '/index.html')) {
      setFile(currentPath + '/index.html');
      setFolder(currentPath + '?/[a-zA-Z0-9._-]+$');
    } else if (Objects.includes(currentPath)) {
      setFile(currentPath);
      setFolder(currentPath + '?/[a-zA-Z0-9._-]+$');
    }
  }, [Path, Objects]);
  (0, _react.useEffect)(function () {
    if (!File) return setContent();
    if (File.includes('.html')) {
      getContent(File);
    } else {
      setContent();
    }
  }, [File]);

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
};

exports.default = BucketBlog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCdWNrZXRCbG9nIiwiYnVja2V0IiwiY29udGVudCIsImNsYXNzTmFtZSIsInN0eWxlIiwiTGluayIsIlBhdGgiLCJzZXRQYXRoIiwiQ29udGVudCIsInNldENvbnRlbnQiLCJPYmplY3RzIiwic2V0T2JqZWN0cyIsIkZvbGRlciIsInNldEZvbGRlciIsIkZpbGUiLCJzZXRGaWxlIiwiZ2V0Q29udGVudCIsImF4aW9zIiwiZ2V0IiwicGF0aCIsInRoZW4iLCJkYXRhIiwiY2F0Y2giLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3Vic3RyIiwicmVwbGFjZSIsInNwbGl0IiwibGlzdCIsIm1hcCIsIl9jb250ZW50IiwiS2V5Iiwib2JqZWN0cyIsImNoZWNrIiwiY2hlY2tlZCIsImluY2x1ZGVzIiwiX2NoZWNrIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsImN1cnJlbnRQYXRoIiwiam9pbiIsInBhdGhSZWdleCIsIlJlZ0V4cCIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJmaWx0ZXIiLCJvYmoiLCJtYXRjaCIsIm8iLCJsaW5rIiwibmFtZSIsImxlbmd0aCIsImNhcGl0YWxpemUiLCJwYXJ0IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImluZGV4T2YiLCJwYWRkaW5nTGVmdCIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxhQUFhLFNBQWJBLFVBQWEsT0FNYjtBQUFBLE1BTEpDLE1BS0ksUUFMSkEsTUFLSTtBQUFBLE1BSkpDLE9BSUksUUFKSkEsT0FJSTtBQUFBLE1BSEpDLFNBR0ksUUFISkEsU0FHSTtBQUFBLHdCQUZKQyxLQUVJO0FBQUEsTUFGSkEsS0FFSSw4QkFGSSxFQUVKO0FBQUEsTUFESkMsSUFDSSxRQURKQSxJQUNJOztBQUNKO0FBREksa0JBRTBCLHNCQUYxQjtBQUFBO0FBQUEsTUFFR0MsSUFGSDtB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TCxHQUFjLENBQW5CLEVBQXNCM0IsT0FBdEIsQ0FBOEIsU0FBOUIsRUFBeUMsRUFBekMsRUFBNkNDLEtBQTdDLENBQW1ELEdBQW5ELEVBQXdERSxHQUF4RCxDQUE0RCxTQUFTeUIsVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEI7QUFDekYsaUJBQU9BLEtBQUtDLE1BQUwsQ0FBWSxDQUFaLEVBQWVDLFdBQWYsS0FBK0JGLEtBQUtHLEtBQUwsQ0FBVyxDQUFYLENBQXRDO0FBQ0gsU0FGTSxFQUVKaEIsSUFGSSxDQUVDLEdBRkQsQ0FBUDtBQUdBLGVBQU87QUFBQyxjQUFEO0FBQUEsWUFBTSxJQUFJUyxJQUFWLEVBQWdCLEtBQUtELENBQXJCLEVBQXdCLFFBQVE1QixPQUFPQyxRQUFQLENBQWdCQyxRQUFoQixLQUE2QjJCLElBQTdCLEdBQW9DLFFBQXBDLEdBQStDLEVBQS9FLEVBQW1GLE9BQU8sRUFBRVMsYUFBYSxNQUFmLEVBQTFGO0FBQW1ILCtDQUFHLGtDQUErQlosSUFBSWIsUUFBSixDQUFhLE9BQWIsSUFBd0IsTUFBeEIsR0FBaUMsUUFBaEUsQ0FBSCxHQUFuSDtBQUFBO0FBQXNNaUI7QUFBdE0sU0FBUDtBQUNELE9BUlc7QUFWZCxLQURGO0FBcUJFLCtDQUFTLFdBQVUsZ0JBQW5CLEVBQW9DLHlCQUF5QixFQUFFUyxRQUFRdEQsV0FBVyxFQUFyQixFQUE3RCxFQUF3RixPQUFPSixLQUEvRjtBQXJCRixHQURGO0FBeUJELENBcEZEOztrQkFzRmVKLFUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IEJ1Y2tldEJsb2cgPSAoe1xyXG4gIGJ1Y2tldCxcclxuICBjb250ZW50LFxyXG4gIGNsYXNzTmFtZSxcclxuICBzdHlsZSA9IHt9LFxyXG4gIExpbmtcclxufSkgPT4ge1xyXG4gIC8vIGlmICghY29udGVudCkgdGhyb3cgbmV3IEVycm9yKCdObyBcInJvb3RcIiBvciBcImNvbnRlbnRcIiBwcm9wZXJ0eSBwcm92aWRlZC4gQ2Fubm90IGdldCBjb250ZW50LicpO1xyXG4gIGNvbnN0IFtQYXRoLCBzZXRQYXRoXSAgICAgICA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW0NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbT2JqZWN0cywgc2V0T2JqZWN0c10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtGb2xkZXIsIHNldEZvbGRlcl0gICA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW0ZpbGUsIHNldEZpbGVdICAgICAgID0gdXNlU3RhdGUoKTtcclxuICBcclxuICBjb25zdCBnZXRDb250ZW50ICAgICAgICAgICAgPSBwYXRoID0+IGF4aW9zLmdldChgaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tLyR7YnVja2V0fSR7cGF0aH1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHNldENvbnRlbnQoZGF0YSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiBzZXRDb250ZW50KCkpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0UGF0aCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3Vic3RyKDEsKS5yZXBsYWNlKC9cXC8kLywgJycpLnNwbGl0KCcvJykpO1xyXG4gIH0sIFt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbGlzdCA9IE9iamVjdC52YWx1ZXMoY29udGVudCB8fCBbXSkubWFwKF9jb250ZW50ID0+IF9jb250ZW50LktleSk7XHJcbiAgICBjb25zdCBvYmplY3RzID0gW107XHJcbiAgICBsaXN0Lm1hcChfY29udGVudCA9PiB7XHJcbiAgICAgIGNvbnN0IGNoZWNrID0gX2NvbnRlbnQucmVwbGFjZSgvXFwvJC8sICcnKS5zcGxpdCgnLycpO1xyXG4gICAgICBsZXQgY2hlY2tlZCA9ICcnO1xyXG4gICAgICBjaGVjay5tYXAoX2NoZWNrID0+IHtcclxuICAgICAgICBpZiAoIW9iamVjdHMuaW5jbHVkZXMoYCR7Y2hlY2tlZH0vJHtfY2hlY2t9YCkpIG9iamVjdHMucHVzaChgJHtjaGVja2VkfS8ke19jaGVja31gKTtcclxuICAgICAgICBjaGVja2VkID0gYCR7Y2hlY2tlZH0vJHtfY2hlY2t9YDtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHNldE9iamVjdHMob2JqZWN0cy5zb3J0KChhLCBiKSA9PiBhIDwgYiA/IDEgOiBhID4gYiA/IC0xIDogMCkpO1xyXG4gIH0sIFtjb250ZW50XSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghUGF0aCB8fCAhT2JqZWN0cykgcmV0dXJuO1xyXG4gICAgY29uc3QgY3VycmVudFBhdGggPSBgLyR7UGF0aC5qb2luKCcvJyl9YDtcclxuICAgIGlmIChPYmplY3RzLmluY2x1ZGVzKGN1cnJlbnRQYXRoICsgJy5odG1sJykpIHtcclxuICAgICAgc2V0RmlsZShjdXJyZW50UGF0aCArICcuaHRtbCcpO1xyXG4gICAgICBzZXRGb2xkZXIoYCR7Y3VycmVudFBhdGgucmVwbGFjZSgvXFwvW2EtekEtWjAtOS5fLV0rJC8sICcnKX0/L1thLXpBLVowLTkuXy1dKyRgKTtcclxuICAgIH0gZWxzZSBpZiAoT2JqZWN0cy5pbmNsdWRlcyhjdXJyZW50UGF0aCArICcvaW5kZXguaHRtbCcpKSB7XHJcbiAgICAgIHNldEZpbGUoY3VycmVudFBhdGggKyAnL2luZGV4Lmh0bWwnKTtcclxuICAgICAgc2V0Rm9sZGVyKGAke2N1cnJlbnRQYXRofT8vW2EtekEtWjAtOS5fLV0rJGApO1xyXG4gICAgfSBlbHNlIGlmIChPYmplY3RzLmluY2x1ZGVzKGN1cnJlbnRQYXRoKSkge1xyXG4gICAgICBzZXRGaWxlKGN1cnJlbnRQYXRoKTtcclxuICAgICAgc2V0Rm9sZGVyKGAke2N1cnJlbnRQYXRofT8vW2EtekEtWjAtOS5fLV0rJGApO1xyXG4gICAgfVxyXG4gIH0sIFtQYXRoLCBPYmplY3RzXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghRmlsZSkgcmV0dXJuIHNldENvbnRlbnQoKTtcclxuICAgIGlmIChGaWxlLmluY2x1ZGVzKCcuaHRtbCcpKSB7XHJcbiAgICAgIGdldENvbnRlbnQoRmlsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRDb250ZW50KCk7XHJcbiAgICB9XHJcbiAgfSwgW0ZpbGVdKTtcclxuXHJcbiAgY29uc3QgcGF0aFJlZ2V4ID0gbmV3IFJlZ0V4cChGb2xkZXIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPXtgQnVja2V0QmxvZyR7Y2xhc3NOYW1lID8gYCAke2NsYXNzTmFtZX1gIDogJyByb3cnfWB9IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2ggY29sIHAtMCBib3JkZXItcmlnaHQgaC0xMDBcIiBzdHlsZT17eyBtaW5XaWR0aDozMDAsIG1heFdpZHRoOiAzMDAgfX0+XHJcbiAgICAgICAge09iamVjdHMgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSAnL3dpa2knICYmIDxMaW5rIHRvPXt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW2EtekEtWjAtOS5fLV0rJC8sICcnKX0+PGkgY2xhc3NOYW1lPVwibXItMiBmYSBmYS1mdyBmYS1sZXZlbC11cFwiIC8+IEJhY2s8L0xpbms+fVxyXG4gICAgICAgIHtPYmplY3RzICYmIE9iamVjdHMuZmlsdGVyKG9iaiA9PiBvYmoubWF0Y2gocGF0aFJlZ2V4KSkuZmlsdGVyKG9iaiA9PiBvYmouaW5jbHVkZXMoJ2luZGV4Lmh0bWwnKSkubWFwKChvYmosIG8pID0+IHtcclxuICAgICAgICAgIGNvbnN0IGxpbmsgPSBvYmoucmVwbGFjZSgvXFwvaW5kZXhcXC5odG1sJC8sICcnKTtcclxuICAgICAgICAgIGxldCBuYW1lID0gbGluay5yZXBsYWNlKC9cXC8kLywgJycpLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgICBuYW1lID0gbmFtZVtuYW1lLmxlbmd0aCAtIDFdLnNwbGl0KCctJykubWFwKGZ1bmN0aW9uIGNhcGl0YWxpemUocGFydCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBwYXJ0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcGFydC5zbGljZSgxKTtcclxuICAgICAgICAgIH0pLmpvaW4oJyAnKTtcclxuICAgICAgICAgIHJldHVybiA8TGluayBhY3RpdmU9e3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gbGluayA/ICdhY3RpdmUnIDogJyd9IHRvPXtsaW5rfSBrZXk9e299PjxpIGNsYXNzTmFtZT1cIm1yLTIgZmEgZmEtZncgZmEtZm9sZGVyLW9wZW5cIiAvPiB7bmFtZX08L0xpbms+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIHtPYmplY3RzICYmIE9iamVjdHMuZmlsdGVyKG9iaiA9PiBvYmoubWF0Y2gocGF0aFJlZ2V4KSkuZmlsdGVyKG9iaiA9PiAhb2JqLmluY2x1ZGVzKCdpbmRleC5odG1sJykpLnNvcnQoYSA9PiBhLmluZGV4T2YoJy5odG1sJykpLm1hcCgob2JqLCBvKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIW9iaikgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICBjb25zdCBsaW5rID0gb2JqLnJlcGxhY2UoL1xcLmh0bWwkLywgJycpO1xyXG4gICAgICAgICAgbGV0IG5hbWUgPSBvYmoucmVwbGFjZSgvXFwvJC8sICcnKS5zcGxpdCgnLycpO1xyXG4gICAgICAgICAgbmFtZSA9IG5hbWVbbmFtZS5sZW5ndGggLSAxXS5yZXBsYWNlKC9cXC5odG1sJC8sICcnKS5zcGxpdCgnLScpLm1hcChmdW5jdGlvbiBjYXBpdGFsaXplKHBhcnQpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gcGFydC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHBhcnQuc2xpY2UoMSk7XHJcbiAgICAgICAgICB9KS5qb2luKCcgJyk7XHJcbiAgICAgICAgICByZXR1cm4gPExpbmsgdG89e2xpbmt9IGtleT17b30gYWN0aXZlPXt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IGxpbmsgPyAnYWN0aXZlJyA6ICcnfSBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzJyZW0nIH19PjxpIGNsYXNzTmFtZT17YG1yLTIgZmEgZmEtZncgZmEtJHtvYmouaW5jbHVkZXMoJy5odG1sJykgPyAnZmlsZScgOiAnZm9sZGVyJ31gfSAvPiB7bmFtZX08L0xpbms+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2FzaWRlPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb2wgaC0xMDAgcHQtMlwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogQ29udGVudCB8fCAnJyB9fSBzdHlsZT17c3R5bGV9IC8+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1Y2tldEJsb2c7Il19