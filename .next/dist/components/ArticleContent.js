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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Statement = require('./Statement');

var _Statement2 = _interopRequireDefault(_Statement);

var _ramda = require('ramda');

var _reactStringReplace = require('react-string-replace');

var _reactStringReplace2 = _interopRequireDefault(_reactStringReplace);

var _Sidebar = require('./Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _StatementPopup = require('./StatementPopup');

var _StatementPopup2 = _interopRequireDefault(_StatementPopup);

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

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ArticleContent.__proto__ || (0, _getPrototypeOf2.default)(ArticleContent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      statementPopup: null,
      statementPopupOffset: 0
    }, _this.findAssesmentById = function (id) {
      var statements = _this.props.statements;

      var statement = (0, _ramda.find)(function (val) {
        return val.id === id;
      })(statements);

      return statement;
    }, _this.handleStatementClick = function (id, ref) {
      var statement = _this.findAssesmentById(id);
      _this.setState({
        statementPopup: statement,
        statementPopupOffset: ref.offsetTop
      });
    }, _this.handleStatementPopupClose = function () {
      _this.setState({ statementPopup: null });
    }, _this.insertMarks = function (text) {
      var replacedText = text;
      console.log(_this.props.statementsLocations);
      _this.props.statementsLocations.map(function (location) {
        return {
          content: text.slice(+location.start, +location.end),
          id: location.id
        };
      }).forEach(function (location) {
        console.log(location, _this.props.statements);
        var statement = _this.findAssesmentById(location.id);
        console.log(statement);
        if (!statement) return;

        replacedText = (0, _reactStringReplace2.default)(replacedText, location.content, function (match) {
          return React.createElement(_Statement2.default, (0, _extends3.default)({}, statement, { onClick: _this.handleStatementClick, __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          }), match);
        });
      });

      return replacedText;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ArticleContent, [{
    key: 'render',
    value: function render() {
      var content = this.props.content;
      var _state = this.state,
          statementPopup = _state.statementPopup,
          statementPopupOffset = _state.statementPopupOffset;

      return React.createElement('div', { className: 'article-content', __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, React.createElement('div', { className: 'container-fluid', __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, React.createElement('div', { className: 'row ', __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, React.createElement('div', {
        className: 'jsx-2359530958' + ' ' + 'col offset-sm-1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, this.insertMarks(content), React.createElement(_style2.default, {
        styleId: '2359530958',
        css: 'div.jsx-2359530958{white-space:pre-wrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXJ0aWNsZUNvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0YwQixBQUd3QyxxQkFDdkIiLCJmaWxlIjoiY29tcG9uZW50cy9BcnRpY2xlQ29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGFuaWVsL3dlYmRldi9kZW1hZ29nIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUge1xuICBTdGF0ZW1lbnQgYXMgU3RhdGVtZW50VHlwZSxcbiAgU3RhdGVtZW50TG9jYXRpb24sXG59IGZyb20gJy4uL2xpYi90eXBlcydcbmltcG9ydCBTdGF0ZW1lbnQgZnJvbSAnLi9TdGF0ZW1lbnQnXG5pbXBvcnQgeyBmaW5kLCBwYXRoIH0gZnJvbSAncmFtZGEnXG5pbXBvcnQgcmVhY3RTdHJpbmdSZXBsYWNlIGZyb20gJ3JlYWN0LXN0cmluZy1yZXBsYWNlJ1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9TaWRlYmFyJ1xuaW1wb3J0IFN0YXRlbWVudFBvcHVwIGZyb20gJy4vU3RhdGVtZW50UG9wdXAnXG5cbnR5cGUgQXJ0aWNsZUNvbnRlbnRQcm9wcyA9IHtcbiAgY29udGVudDogc3RyaW5nLFxuICBzdGF0ZW1lbnRzOiBBcnJheTxTdGF0ZW1lbnRUeXBlPixcbiAgc3RhdGVtZW50c0xvY2F0aW9uczogQXJyYXk8U3RhdGVtZW50TG9jYXRpb24+LFxufVxuXG50eXBlIEFydGljbGVDb250ZW50U3RhdGUgPSB7XG4gIHN0YXRlbWVudFBvcHVwOiA/U3RhdGVtZW50VHlwZSxcbiAgc3RhdGVtZW50UG9wdXBPZmZzZXQ6IG51bWJlcixcbn1cblxuY2xhc3MgQXJ0aWNsZUNvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIEFydGljbGVDb250ZW50UHJvcHMsXG4gIEFydGljbGVDb250ZW50U3RhdGUsXG4+IHtcbiAgc3RhdGUgPSB7XG4gICAgc3RhdGVtZW50UG9wdXA6IG51bGwsXG4gICAgc3RhdGVtZW50UG9wdXBPZmZzZXQ6IDAsXG4gIH1cblxuICBmaW5kQXNzZXNtZW50QnlJZCA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgeyBzdGF0ZW1lbnRzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gZmluZCh2YWwgPT4gdmFsLmlkID09PSBpZCkoc3RhdGVtZW50cylcblxuICAgIHJldHVybiBzdGF0ZW1lbnRcbiAgfVxuXG4gIGhhbmRsZVN0YXRlbWVudENsaWNrID0gKGlkOiBzdHJpbmcsIHJlZjogT2JqZWN0KSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5maW5kQXNzZXNtZW50QnlJZChpZClcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0YXRlbWVudFBvcHVwOiBzdGF0ZW1lbnQsXG4gICAgICBzdGF0ZW1lbnRQb3B1cE9mZnNldDogcmVmLm9mZnNldFRvcCxcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlU3RhdGVtZW50UG9wdXBDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RhdGVtZW50UG9wdXA6IG51bGwgfSlcbiAgfVxuXG4gIGluc2VydE1hcmtzID0gKHRleHQ6IHN0cmluZykgPT4ge1xuICAgIGxldCByZXBsYWNlZFRleHQgPSB0ZXh0XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5zdGF0ZW1lbnRzTG9jYXRpb25zKVxuICAgIHRoaXMucHJvcHMuc3RhdGVtZW50c0xvY2F0aW9uc1xuICAgICAgLm1hcChsb2NhdGlvbiA9PiAoe1xuICAgICAgICBjb250ZW50OiB0ZXh0LnNsaWNlKCtsb2NhdGlvbi5zdGFydCwgK2xvY2F0aW9uLmVuZCksXG4gICAgICAgIGlkOiBsb2NhdGlvbi5pZCxcbiAgICAgIH0pKVxuICAgICAgLmZvckVhY2gobG9jYXRpb24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhsb2NhdGlvbiwgdGhpcy5wcm9wcy5zdGF0ZW1lbnRzKVxuICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmZpbmRBc3Nlc21lbnRCeUlkKGxvY2F0aW9uLmlkKVxuICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZW1lbnQpXG4gICAgICAgIGlmICghc3RhdGVtZW50KSByZXR1cm5cblxuICAgICAgICByZXBsYWNlZFRleHQgPSByZWFjdFN0cmluZ1JlcGxhY2UoXG4gICAgICAgICAgcmVwbGFjZWRUZXh0LFxuICAgICAgICAgIGxvY2F0aW9uLmNvbnRlbnQsXG4gICAgICAgICAgbWF0Y2ggPT4gKFxuICAgICAgICAgICAgPFN0YXRlbWVudCB7Li4uc3RhdGVtZW50fSBvbkNsaWNrPXt0aGlzLmhhbmRsZVN0YXRlbWVudENsaWNrfT5cbiAgICAgICAgICAgICAge21hdGNofVxuICAgICAgICAgICAgPC9TdGF0ZW1lbnQ+XG4gICAgICAgICAgKSxcbiAgICAgICAgKVxuICAgICAgfSlcblxuICAgIHJldHVybiByZXBsYWNlZFRleHRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbnRlbnQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHN0YXRlbWVudFBvcHVwLCBzdGF0ZW1lbnRQb3B1cE9mZnNldCB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgb2Zmc2V0LXNtLTFcIj5cbiAgICAgICAgICAgICAge3RoaXMuaW5zZXJ0TWFya3MoY29udGVudCl9XG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8U2lkZWJhcj5cbiAgICAgICAgICAgICAgPFN0YXRlbWVudFBvcHVwXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50PXtzdGF0ZW1lbnRQb3B1cH1cbiAgICAgICAgICAgICAgICBvZmZzZXQ9e3N0YXRlbWVudFBvcHVwT2Zmc2V0fVxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlU3RhdGVtZW50UG9wdXBDbG9zZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU2lkZWJhcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUNvbnRlbnRcbiJdfQ== */\n/*@ sourceURL=components/ArticleContent.js */'
      })), React.createElement(_Sidebar2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, React.createElement(_StatementPopup2.default, {
        statement: statementPopup,
        offset: statementPopupOffset,
        onClose: this.handleStatementPopupClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      })))));
    }
  }]);

  return ArticleContent;
}(React.Component);

exports.default = ArticleContent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXJ0aWNsZUNvbnRlbnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJTdGF0ZW1lbnQiLCJmaW5kIiwicGF0aCIsInJlYWN0U3RyaW5nUmVwbGFjZSIsIlNpZGViYXIiLCJTdGF0ZW1lbnRQb3B1cCIsIkFydGljbGVDb250ZW50Iiwic3RhdGUiLCJzdGF0ZW1lbnRQb3B1cCIsInN0YXRlbWVudFBvcHVwT2Zmc2V0IiwiZmluZEFzc2VzbWVudEJ5SWQiLCJpZCIsInN0YXRlbWVudHMiLCJwcm9wcyIsInN0YXRlbWVudCIsInZhbCIsImhhbmRsZVN0YXRlbWVudENsaWNrIiwicmVmIiwic2V0U3RhdGUiLCJvZmZzZXRUb3AiLCJoYW5kbGVTdGF0ZW1lbnRQb3B1cENsb3NlIiwiaW5zZXJ0TWFya3MiLCJ0ZXh0IiwicmVwbGFjZWRUZXh0IiwiY29uc29sZSIsImxvZyIsInN0YXRlbWVudHNMb2NhdGlvbnMiLCJtYXAiLCJjb250ZW50Iiwic2xpY2UiLCJsb2NhdGlvbiIsInN0YXJ0IiwiZW5kIiwiZm9yRWFjaCIsIm1hdGNoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBTzs7SUFBUCxBQUFZOztBQUtaLEFBQU8sQUFBZTs7OztBQUN0QixBQUFTLEFBQU07O0FBQ2YsQUFBTzs7OztBQUNQLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQW9COzs7Ozs7Ozs7OztJLEFBYXJCOzs7Ozs7Ozs7Ozs7Ozs0TkFJSixBO3NCQUFRLEFBQ1UsQUFDaEI7NEJBRk0sQUFFZ0IsQTtBQUZoQixBQUNOLGFBSUYsQSxvQkFBb0IsVUFBQSxBQUFDLElBQWU7VUFBQSxBQUMxQixhQUFlLE1BRFcsQUFDTixNQURNLEFBQzFCLEFBQ1I7O1VBQU0sNkJBQWlCLGVBQUE7ZUFBTyxJQUFBLEFBQUksT0FBWCxBQUFrQjtBQUF2QixPQUFBLEVBQWxCLEFBQWtCLEFBQTJCLEFBRTdDOzthQUFBLEFBQU8sQUFDUjtBLGFBRUQsQSx1QkFBdUIsVUFBQSxBQUFDLElBQUQsQUFBYSxLQUFnQixBQUNsRDtVQUFNLFlBQVksTUFBQSxBQUFLLGtCQUF2QixBQUFrQixBQUF1QixBQUN6QztZQUFBLEFBQUs7d0JBQVMsQUFDSSxBQUNoQjs4QkFBc0IsSUFGeEIsQUFBYyxBQUVjLEFBRTdCO0FBSmUsQUFDWjtBLGFBS0osQSw0QkFBNEIsWUFBTSxBQUNoQztZQUFBLEFBQUssU0FBUyxFQUFFLGdCQUFoQixBQUFjLEFBQWtCLEFBQ2pDO0EsYSxBQUVELGNBQWMsVUFBQSxBQUFDLE1BQWlCLEFBQzlCO1VBQUksZUFBSixBQUFtQixBQUNuQjtjQUFBLEFBQVEsSUFBSSxNQUFBLEFBQUssTUFBakIsQUFBdUIsQUFDdkI7WUFBQSxBQUFLLE1BQUwsQUFBVyxvQkFBWCxBQUNHLElBQUksb0JBQUE7O21CQUNNLEtBQUEsQUFBSyxNQUFNLENBQUMsU0FBWixBQUFxQixPQUFPLENBQUMsU0FEdEIsQUFDUCxBQUFzQyxBQUMvQztjQUFJLFNBRkQsQUFBYSxBQUVIO0FBRkcsQUFDaEI7QUFGSixTQUFBLEFBS0csUUFBUSxvQkFBWSxBQUNuQjtnQkFBQSxBQUFRLElBQVIsQUFBWSxVQUFVLE1BQUEsQUFBSyxNQUEzQixBQUFpQyxBQUNqQztZQUFNLFlBQVksTUFBQSxBQUFLLGtCQUFrQixTQUF6QyxBQUFrQixBQUFnQyxBQUNsRDtnQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO1lBQUksQ0FBSixBQUFLLFdBQVcsQUFFaEI7O3lEQUFlLEFBQ2IsY0FDQSxTQUZhLEFBRUosU0FDVCxpQkFBQTt1QkFDRSxBQUFDLDhEQUFELEFBQWUsYUFBVyxTQUFTLE1BQW5DLEFBQXdDO3dCQUF4QzswQkFBQSxBQUNHO0FBREg7WUFBQSxFQURGLEFBQ0U7QUFKSixBQUFlLEFBU2hCLFNBVGdCO0FBWG5CLEFBc0JBOzthQUFBLEFBQU8sQUFDUjtBOzs7Ozs2QkFFUTtVQUFBLEFBQ0MsVUFBWSxLQURiLEFBQ2tCLE1BRGxCLEFBQ0M7bUJBQ3lDLEtBRjFDLEFBRStDO1VBRi9DLEFBRUMsd0JBRkQsQUFFQztVQUZELEFBRWlCLDhCQUZqQixBQUVpQixBQUN4Qjs7bUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7T0FBQSxRQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO2VBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7ZUFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBQ0csQUFBSyxZQURSLEFBQ0csQUFBaUI7aUJBRHBCO2FBREYsQUFDRSxBQVFBO0FBUkEsaUJBUUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsZUFDRSxBQUFDO21CQUFELEFBQ2EsQUFDWDtnQkFGRixBQUVVLEFBQ1I7aUJBQVMsS0FIWCxBQUdnQjs7b0JBSGhCO3NCQWJWLEFBQ0UsQUFDRSxBQUNFLEFBU0UsQUFDRSxBQVVYO0FBVlc7QUFDRTs7Ozs7RUF6RWEsTUFBTSxBLEFBcUZuQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJBcnRpY2xlQ29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGFuaWVsL3dlYmRldi9kZW1hZ29nIn0=