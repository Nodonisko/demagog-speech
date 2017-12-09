'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _stringSimilarity = require('string-similarity');

var _stringSimilarity2 = _interopRequireDefault(_stringSimilarity);

var _Statement = require('./Statement');

var _Statement2 = _interopRequireDefault(_Statement);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/daniel/webdev/demagog/components/ArticleContent.js';


var ArticleContent = function (_React$Component) {
  (0, _inherits3.default)(ArticleContent, _React$Component);

  function ArticleContent() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ArticleContent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ArticleContent.__proto__ || (0, _getPrototypeOf2.default)(ArticleContent)).call.apply(_ref, [this].concat(args))), _this), _this.wrapStatements = function (text) {
      if (text.length < 4) return text;

      var statements = _this.props.statements;

      var matchedStatements = statements.map(function (statement) {
        var matchUnit = _stringSimilarity2.default.compareTwoStrings(text, statement.content);
        if (matchUnit > 0.4) {
          return statement;
        }
        return null;
      }).filter(function (item) {
        return item;
      });

      if (matchedStatements && matchedStatements[0]) {
        return React.createElement(_Statement2.default, (0, _extends3.default)({}, matchedStatements[0], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }), text);
      }
      return text;
    }, _this.nl2br = function (content) {
      return content.split('\n').map(function (item, key) {
        return React.createElement('p', { key: key, __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, _this.wrapStatements(item));
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ArticleContent, [{
    key: 'render',
    value: function render() {
      var content = this.props.content;

      return React.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, this.nl2br(content));
    }
  }]);

  return ArticleContent;
}(React.Component);

exports.default = ArticleContent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXJ0aWNsZUNvbnRlbnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJTdHJpbmdTaW1pbGFyaXR5IiwiU3RhdGVtZW50IiwiUiIsIkFydGljbGVDb250ZW50Iiwid3JhcFN0YXRlbWVudHMiLCJ0ZXh0IiwibGVuZ3RoIiwic3RhdGVtZW50cyIsInByb3BzIiwibWF0Y2hlZFN0YXRlbWVudHMiLCJtYXAiLCJtYXRjaFVuaXQiLCJjb21wYXJlVHdvU3RyaW5ncyIsInN0YXRlbWVudCIsImNvbnRlbnQiLCJmaWx0ZXIiLCJpdGVtIiwibmwyYnIiLCJzcGxpdCIsImtleSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBTzs7SUFBUCxBQUFZOztBQUVaLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTzs7Ozs7Ozs7Ozs7SSxBQU9EOzs7Ozs7Ozs7Ozs7Ozs0TkFDSixBLGlCQUFpQixVQUFBLEFBQUMsTUFBaUIsQUFDakM7VUFBSSxLQUFBLEFBQUssU0FBVCxBQUFrQixHQUFHLE9BRFksQUFDWixBQUFPOztVQURLLEFBR3pCLGFBQWUsTUFIVSxBQUdMLE1BSEssQUFHekIsQUFDUjs7VUFBTSwrQkFBb0IsQUFDdkIsSUFBSSxxQkFBYSxBQUNoQjtZQUFNLFlBQVksMkJBQUEsQUFBaUIsa0JBQWpCLEFBQ2hCLE1BQ0EsVUFGRixBQUFrQixBQUVOLEFBRVo7WUFBSSxZQUFKLEFBQWdCLEtBQUssQUFDbkI7aUJBQUEsQUFBTyxBQUNSO0FBQ0Q7ZUFBQSxBQUFPLEFBQ1I7QUFWdUIsT0FBQSxFQUFBLEFBV3ZCLE9BQU8sZ0JBQUE7ZUFBQSxBQUFRO0FBWGxCLEFBQTBCLEFBYTFCOztVQUFJLHFCQUFxQixrQkFBekIsQUFBeUIsQUFBa0IsSUFBSSxBQUM3QztxQkFBTyxBQUFDLDhEQUFjLGtCQUFmLEFBQWUsQUFBa0I7O3NCQUFqQzt3QkFBQSxBQUFzQztBQUF0QztBQUFBLFVBQUEsRUFBUCxBQUFPLEFBQ1I7QUFDRDthQUFBLEFBQU8sQUFDUjtBLGFBRUQsQSxRQUFRLFVBQUEsQUFBQyxTQUFEO3FCQUNOLEFBQ0csTUFESCxBQUNTLE1BRFQsQUFFRyxJQUFJLFVBQUEsQUFBQyxNQUFELEFBQU8sS0FBUDtxQkFBZSxjQUFBLE9BQUcsS0FBSCxBQUFRO3NCQUFSO3dCQUFBLEFBQWM7QUFBZDtTQUFBLFFBQWMsQUFBSyxlQUFsQyxBQUFlLEFBQWMsQUFBb0I7QUFIbEQsQUFDTixPQUFBO0E7Ozs7OzZCQUlPO1VBQUEsQUFDQyxVQUFZLEtBRGIsQUFDa0IsTUFEbEIsQUFDQyxBQUNSOzttQkFBTyxjQUFBOztvQkFBQTtzQkFBQSxBQUFNO0FBQU47QUFBQSxPQUFBLE9BQU0sQUFBSyxNQUFsQixBQUFPLEFBQU0sQUFBVyxBQUN6Qjs7Ozs7RUFoQzBCLE1BQU0sQSxBQW1DbkM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQXJ0aWNsZUNvbnRlbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RhbmllbC93ZWJkZXYvZGVtYWdvZyJ9