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

var _ArticleHeading = require('../components/ArticleHeading');

var _ArticleHeading2 = _interopRequireDefault(_ArticleHeading);

var _Page = require('../components/Page');

var _Page2 = _interopRequireDefault(_Page);

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
      var _props = this.props,
          article = _props.article,
          statementsLocations = _props.statementsLocations;
      var title = article.title,
          perex = article.perex,
          illustration = article.illustration;

      return React.createElement(_Page2.default, { title: title, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, article && React.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, React.createElement(_ArticleHeading2.default, {
        title: title,
        subtitle: perex,
        image: 'https://demagog.cz/' + illustration,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), React.createElement(_ArticleContent2.default, {
        statementsLocations: statementsLocations,
        content: article.source.transcript,
        statements: article.statements,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var query = _ref.query;
        var article, statementsLocations;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api2.default.getArticleBySlug(query.slug);

              case 2:
                article = _context.sent;
                _context.next = 5;
                return _api2.default.getStatementLocations(query.slug);

              case 5:
                statementsLocations = _context.sent;
                return _context.abrupt('return', {
                  article: article,
                  statementsLocations: statementsLocations
                });

              case 7:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FydGljbGUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJhcGkiLCJBcnRpY2xlQ29udGVudCIsIkFydGljbGVIZWFkaW5nIiwiUGFnZSIsIkFydGljbGVQYWdlIiwicHJvcHMiLCJhcnRpY2xlIiwic3RhdGVtZW50c0xvY2F0aW9ucyIsInRpdGxlIiwicGVyZXgiLCJpbGx1c3RyYXRpb24iLCJzb3VyY2UiLCJ0cmFuc2NyaXB0Iiwic3RhdGVtZW50cyIsInF1ZXJ5IiwiZ2V0QXJ0aWNsZUJ5U2x1ZyIsInNsdWciLCJnZXRTdGF0ZW1lbnRMb2NhdGlvbnMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxBQUFPOztJQUFQLEFBQVk7O0FBQ1osQUFBTyxBQUFTOzs7O0FBRWhCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFPLEFBQVU7Ozs7Ozs7Ozs7O0ksQUFPWDs7Ozs7Ozs7Ozs7NkJBVUs7bUJBQ2tDLEtBRGxDLEFBQ3VDO1VBRHZDLEFBQ0MsaUJBREQsQUFDQztVQURELEFBQ1UsNkJBRFYsQUFDVTtVQURWLEFBRUMsUUFGRCxBQUVnQyxRQUZoQyxBQUVDO1VBRkQsQUFFUSxRQUZSLEFBRWdDLFFBRmhDLEFBRVE7VUFGUixBQUVlLGVBRmYsQUFFZ0MsUUFGaEMsQUFFZSxBQUV0Qjs7bUJBQ0UsQUFBQyxnQ0FBSyxPQUFOLEFBQWE7b0JBQWI7c0JBQUEsQUFDRztBQURIO09BQUEsbUJBRUksY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxRQUNFLEFBQUM7ZUFBRCxBQUNTLEFBQ1A7a0JBRkYsQUFFWSxBQUNWO3VDQUhGLEFBRytCOztvQkFIL0I7c0JBREYsQUFDRSxBQUtBO0FBTEE7QUFDRSxnQkFJRixBQUFDOzZCQUFELEFBQ3VCLEFBQ3JCO2lCQUFTLFFBQUEsQUFBUSxPQUZuQixBQUUwQixBQUN4QjtvQkFBWSxRQUhkLEFBR3NCOztvQkFIdEI7c0JBVFIsQUFDRSxBQUVJLEFBTUUsQUFTVDtBQVRTO0FBQ0U7Ozs7OztZLEFBdkJtQixhQUFBLEE7Ozs7Ozs7dUJBQ1AsY0FBQSxBQUFJLGlCQUFpQixNQUFyQixBQUEyQixBOzttQkFBM0M7QTs7dUJBQzRCLGNBQUEsQUFBSSxzQkFBc0IsTUFBMUIsQUFBZ0MsQTs7bUJBQTVEO0E7OzJCQUNDLEFBRUw7dUNBRkssQTtBQUFBLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFMb0IsTUFBTSxBLEFBbUNoQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJhcnRpY2xlLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kYW5pZWwvd2ViZGV2L2RlbWFnb2cifQ==