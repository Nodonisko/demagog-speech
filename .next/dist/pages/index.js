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

var _Page = require('../components/Page');

var _Page2 = _interopRequireDefault(_Page);

var _HomeHeading = require('../components/HomeHeading');

var _HomeHeading2 = _interopRequireDefault(_HomeHeading);

var _ArticleListItem = require('../components/ArticleListItem');

var _ArticleListItem2 = _interopRequireDefault(_ArticleListItem);

var _ramda = require('ramda');

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

      return React.createElement(_Page2.default, { title: '\xDAvod', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, React.createElement(_HomeHeading2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), React.createElement('div', { className: 'list-content', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, React.createElement('div', { className: 'container-fluid', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, React.createElement('div', { className: 'row', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, articles.filter(function (article) {
        return !(0, _ramda.isEmpty)(article.source.transcript);
      }).map(function (article) {
        return React.createElement(_ArticleListItem2.default, { article: article, key: article.slug, __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        });
      })))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
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
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return IndexPage;
}(React.Component);

exports.default = IndexPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiYXBpIiwiUGFnZSIsIkhvbWVIZWFkaW5nIiwiQXJ0aWNsZUxpc3RJdGVtIiwiaXNFbXB0eSIsIkluZGV4UGFnZSIsImFydGljbGVzIiwicHJvcHMiLCJmaWx0ZXIiLCJhcnRpY2xlIiwic291cmNlIiwidHJhbnNjcmlwdCIsIm1hcCIsInNsdWciLCJnZXRBbGxBcnRpY2xlcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEFBQU87O0lBQVAsQUFBWTs7QUFDWixBQUFPLEFBQVM7Ozs7QUFFaEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFxQjs7OztBQUM1QixBQUFTOzs7Ozs7Ozs7SSxBQU1IOzs7Ozs7Ozs7Ozs2QkFRSztVQUFBLEFBQ0MsV0FBYSxLQURkLEFBQ21CLE1BRG5CLEFBQ0MsQUFFUjs7bUJBQ0UsQUFBQyxnQ0FBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO09BQUEsUUFDRSxBQUFDOztvQkFBRDtzQkFERixBQUNFLEFBQ0E7QUFEQTtBQUFBLGdCQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO2VBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7ZUFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0c7QUFESDtrQkFDRyxBQUNFLE9BQU8sbUJBQUE7ZUFBVyxDQUFDLG9CQUFRLFFBQUEsQUFBUSxPQUE1QixBQUFZLEFBQXVCO0FBRDVDLFNBQUEsQUFFRSxJQUFJLG1CQUFBO3FCQUNILEFBQUMsMkNBQWdCLFNBQWpCLEFBQTBCLFNBQVMsS0FBSyxRQUF4QyxBQUFnRDtzQkFBaEQ7d0JBREcsQUFDSDtBQUFBO1NBQUE7QUFUZCxBQUNFLEFBRUUsQUFDRSxBQUNFLEFBQ0csQUFVWjs7Ozs7Ozs7Ozs7O3VCQXpCd0IsY0FBQSxBQUFJLEE7O21CQUFyQjtBOzs0QkFDQyxBO0FBQUEsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUprQixNQUFNLEEsQUE4QjlCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kYW5pZWwvd2ViZGV2L2RlbWFnb2cifQ==