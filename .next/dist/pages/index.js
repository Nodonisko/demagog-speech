'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var React = _interopRequireWildcard(_react);

var _api = require('../lib/api');

var _api2 = _interopRequireDefault(_api);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/daniel/webdev/demagog/pages/index.js?entry';


var IndexPage = function (_React$Component) {
  (0, _inherits3.default)(IndexPage, _React$Component);

  function IndexPage() {
    (0, _classCallCheck3.default)(this, IndexPage);

    return (0, _possibleConstructorReturn3.default)(this, (IndexPage.__proto__ || (0, _getPrototypeOf2.default)(IndexPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(IndexPage, [{
    key: 'render',
    value: function render() {
      var articles = this.props.articles;

      return React.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, articles.map(function (_ref) {
        var slug = _ref.slug;
        return React.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }, React.createElement(_link2.default, { href: { pathname: '/article', query: { slug: slug } }, __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }, React.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }, slug)));
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var articles;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api2.default.getAllArticles();

              case 2:
                articles = _context.sent;
                return _context.abrupt('return', {
                  articles: articles
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return IndexPage;
}(React.Component);

exports.default = IndexPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiYXBpIiwiTGluayIsIkluZGV4UGFnZSIsImFydGljbGVzIiwicHJvcHMiLCJtYXAiLCJzbHVnIiwicGF0aG5hbWUiLCJxdWVyeSIsImdldEFsbEFydGljbGVzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBTzs7SUFBUCxBQUFZOztBQUNaLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7Ozs7Ozs7OztJLEFBT0Q7Ozs7Ozs7Ozs7OzZCQVFLO1VBQUEsQUFDQyxXQUFhLEtBRGQsQUFDbUIsTUFEbkIsQUFDQyxBQUNSOzttQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxPQUFBLFdBQ0csQUFBUyxJQUFJLGdCQUFBO1lBQUEsQUFBRyxZQUFILEFBQUc7cUJBQ2YsY0FBQTs7c0JBQUE7d0JBQUEsQUFDRTtBQURGO0FBQUEsU0FBQSxRQUNFLEFBQUMsZ0NBQUssTUFBTSxFQUFFLFVBQUYsQUFBWSxZQUFZLE9BQU8sRUFBRSxNQUE3QyxBQUFZLEFBQStCO3NCQUEzQzt3QkFBQSxBQUNFO0FBREY7aUJBQ0UsY0FBQTs7c0JBQUE7d0JBQUEsQUFBSTtBQUFKO0FBQUEsV0FIUSxBQUNaLEFBQ0UsQUFDRTtBQUxWLEFBQ0UsQUFDRyxBQVNOOzs7Ozs7Ozs7Ozs7dUJBbkJ3QixjQUFBLEFBQUksQTs7bUJBQXJCO0E7OzRCLEFBQ0M7QUFBQSxBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBSmtCLE1BQU0sQSxBQXdCOUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RhbmllbC93ZWJkZXYvZGVtYWdvZyJ9