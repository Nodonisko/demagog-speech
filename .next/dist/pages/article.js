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

var _ArticleContent = require('../components/ArticleContent');

var _ArticleContent2 = _interopRequireDefault(_ArticleContent);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/daniel/webdev/demagog/pages/article.js?entry';


var ArticlePage = function (_React$Component) {
  (0, _inherits3.default)(ArticlePage, _React$Component);

  function ArticlePage() {
    (0, _classCallCheck3.default)(this, ArticlePage);

    return (0, _possibleConstructorReturn3.default)(this, (ArticlePage.__proto__ || (0, _getPrototypeOf2.default)(ArticlePage)).apply(this, arguments));
  }

  (0, _createClass3.default)(ArticlePage, [{
    key: 'render',
    value: function render() {
      var article = this.props.article;

      return React.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, article && React.createElement(_ArticleContent2.default, {
        content: article.source.transcript,
        statements: article.statements,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var query = _ref.query;
        var article;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api2.default.getArticleBySlug(query.slug);

              case 2:
                article = _context.sent;
                return _context.abrupt('return', {
                  article: article
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ArticlePage;
}(React.Component);

exports.default = ArticlePage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FydGljbGUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJhcGkiLCJBcnRpY2xlQ29udGVudCIsIkFydGljbGVQYWdlIiwiYXJ0aWNsZSIsInByb3BzIiwic291cmNlIiwidHJhbnNjcmlwdCIsInN0YXRlbWVudHMiLCJxdWVyeSIsImdldEFydGljbGVCeVNsdWciLCJzbHVnIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBTzs7SUFBUCxBQUFZOztBQUNaLEFBQU8sQUFBUzs7OztBQUVoQixBQUFPLEFBQW9COzs7Ozs7Ozs7OztJQU1yQixBOzs7Ozs7Ozs7Ozs2QkFRSztVQUFBLEFBQ0MsVUFBWSxLQURiLEFBQ2tCLE1BRGxCLEFBQ0MsQUFFUjs7bUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsT0FBQSxtQkFFSSxBQUFDO2lCQUNVLFFBQUEsQUFBUSxPQURuQixBQUMwQixBQUN4QjtvQkFBWSxRQUZkLEFBRXNCOztvQkFGdEI7c0JBSE4sQUFDRSxBQUVJLEFBT1A7QUFQTztBQUNFLE9BREY7Ozs7OztZQWJ1QixBLGEsQUFBQTs7Ozs7Ozt1QkFDUCxjQUFBLEFBQUksaUJBQWlCLE1BQXJCLEFBQTJCLEE7O21CQUEzQztBOzsyQixBQUNDO0FBQUEsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUpvQixNQUFNLEEsQUF3QmhDOztrQkFBQSxBQUFlIiwiZmlsZSI6ImFydGljbGUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RhbmllbC93ZWJkZXYvZGVtYWdvZyJ9