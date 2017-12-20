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

var _escapeStringRegexp = require('escape-string-regexp');

var _escapeStringRegexp2 = _interopRequireDefault(_escapeStringRegexp);

var _SidebarInfo = require('./SidebarInfo');

var _SidebarInfo2 = _interopRequireDefault(_SidebarInfo);

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
      var statements = _this.props.article.statements;

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
      _this.props.statementsLocations.forEach(function (location) {
        var statement = _this.findAssesmentById(location.id);

        if (!statement) return;
        replacedText = (0, _reactStringReplace2.default)(replacedText, new RegExp('(' + (0, _escapeStringRegexp2.default)(location.fragment).replace(/\r?\n|\r/g, '(\\s*)(.*)') + ')', 'mi'), function (match) {
          return React.createElement(_Statement2.default, (0, _extends3.default)({}, statement, {
            onClick: _this.handleStatementClick,
            key: location.id,
            __source: {
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
      var _props = this.props,
          source = _props.article.source,
          article = _props.article;
      var _state = this.state,
          statementPopup = _state.statementPopup,
          statementPopupOffset = _state.statementPopupOffset;

      return React.createElement('div', { className: 'article-content', __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, React.createElement('div', { className: 'container-fluid', __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, React.createElement('div', { className: 'row ', __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, React.createElement('div', {
        className: 'jsx-2359530958' + ' ' + 'col offset-sm-1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, this.insertMarks(source.transcript), React.createElement(_style2.default, {
        styleId: '2359530958',
        css: 'div.jsx-2359530958{white-space:pre-wrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXJ0aWNsZUNvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEYwQixBQUd3QyxxQkFDdkIiLCJmaWxlIjoiY29tcG9uZW50cy9BcnRpY2xlQ29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGFuaWVsL3dlYmRldi9kZW1hZ29nIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUge1xuICBTdGF0ZW1lbnQgYXMgU3RhdGVtZW50VHlwZSxcbiAgU3RhdGVtZW50TG9jYXRpb24sXG4gIEFydGljbGUsXG59IGZyb20gJy4uL2xpYi90eXBlcydcbmltcG9ydCBTdGF0ZW1lbnQgZnJvbSAnLi9TdGF0ZW1lbnQnXG5pbXBvcnQgeyBmaW5kLCBwYXRoIH0gZnJvbSAncmFtZGEnXG5pbXBvcnQgcmVhY3RTdHJpbmdSZXBsYWNlIGZyb20gJ3JlYWN0LXN0cmluZy1yZXBsYWNlJ1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9TaWRlYmFyJ1xuaW1wb3J0IFN0YXRlbWVudFBvcHVwIGZyb20gJy4vU3RhdGVtZW50UG9wdXAnXG5pbXBvcnQgZXNjYXBlU3RyaW5nUmVnZXhwIGZyb20gJ2VzY2FwZS1zdHJpbmctcmVnZXhwJ1xuaW1wb3J0IFNpZGViYXJJbmZvIGZyb20gJy4vU2lkZWJhckluZm8nXG5cbnR5cGUgQXJ0aWNsZUNvbnRlbnRQcm9wcyA9IHtcbiAgc3RhdGVtZW50c0xvY2F0aW9uczogQXJyYXk8U3RhdGVtZW50TG9jYXRpb24+LFxuICBhcnRpY2xlOiBBcnRpY2xlLFxufVxuXG50eXBlIEFydGljbGVDb250ZW50U3RhdGUgPSB7XG4gIHN0YXRlbWVudFBvcHVwOiA/U3RhdGVtZW50VHlwZSxcbiAgc3RhdGVtZW50UG9wdXBPZmZzZXQ6IG51bWJlcixcbn1cblxuY2xhc3MgQXJ0aWNsZUNvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIEFydGljbGVDb250ZW50UHJvcHMsXG4gIEFydGljbGVDb250ZW50U3RhdGUsXG4+IHtcbiAgc3RhdGUgPSB7XG4gICAgc3RhdGVtZW50UG9wdXA6IG51bGwsXG4gICAgc3RhdGVtZW50UG9wdXBPZmZzZXQ6IDAsXG4gIH1cblxuICBmaW5kQXNzZXNtZW50QnlJZCA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgeyBhcnRpY2xlOiB7IHN0YXRlbWVudHMgfSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IGZpbmQodmFsID0+IHZhbC5pZCA9PT0gaWQpKHN0YXRlbWVudHMpXG5cbiAgICByZXR1cm4gc3RhdGVtZW50XG4gIH1cblxuICBoYW5kbGVTdGF0ZW1lbnRDbGljayA9IChpZDogc3RyaW5nLCByZWY6IE9iamVjdCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZmluZEFzc2VzbWVudEJ5SWQoaWQpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdGF0ZW1lbnRQb3B1cDogc3RhdGVtZW50LFxuICAgICAgc3RhdGVtZW50UG9wdXBPZmZzZXQ6IHJlZi5vZmZzZXRUb3AsXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVN0YXRlbWVudFBvcHVwQ2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXRlbWVudFBvcHVwOiBudWxsIH0pXG4gIH1cblxuICBpbnNlcnRNYXJrcyA9ICh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICBsZXQgcmVwbGFjZWRUZXh0ID0gdGV4dFxuICAgIHRoaXMucHJvcHMuc3RhdGVtZW50c0xvY2F0aW9ucy5mb3JFYWNoKGxvY2F0aW9uID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZmluZEFzc2VzbWVudEJ5SWQobG9jYXRpb24uaWQpXG5cbiAgICAgIGlmICghc3RhdGVtZW50KSByZXR1cm5cbiAgICAgIHJlcGxhY2VkVGV4dCA9IHJlYWN0U3RyaW5nUmVwbGFjZShcbiAgICAgICAgcmVwbGFjZWRUZXh0LFxuICAgICAgICBuZXcgUmVnRXhwKFxuICAgICAgICAgIGAoJHtlc2NhcGVTdHJpbmdSZWdleHAobG9jYXRpb24uZnJhZ21lbnQpLnJlcGxhY2UoXG4gICAgICAgICAgICAvXFxyP1xcbnxcXHIvZyxcbiAgICAgICAgICAgICcoXFxcXHMqKSguKiknLFxuICAgICAgICAgICl9KWAsXG4gICAgICAgICAgJ21pJyxcbiAgICAgICAgKSxcbiAgICAgICAgbWF0Y2ggPT4gKFxuICAgICAgICAgIDxTdGF0ZW1lbnRcbiAgICAgICAgICAgIHsuLi5zdGF0ZW1lbnR9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVN0YXRlbWVudENsaWNrfVxuICAgICAgICAgICAga2V5PXtsb2NhdGlvbi5pZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bWF0Y2h9XG4gICAgICAgICAgPC9TdGF0ZW1lbnQ+XG4gICAgICAgICksXG4gICAgICApXG4gICAgfSlcblxuICAgIHJldHVybiByZXBsYWNlZFRleHRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFydGljbGU6IHsgc291cmNlIH0sIGFydGljbGUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHN0YXRlbWVudFBvcHVwLCBzdGF0ZW1lbnRQb3B1cE9mZnNldCB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgb2Zmc2V0LXNtLTFcIj5cbiAgICAgICAgICAgICAge3RoaXMuaW5zZXJ0TWFya3Moc291cmNlLnRyYW5zY3JpcHQpfVxuICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFNpZGViYXI+XG4gICAgICAgICAgICAgIDxTaWRlYmFySW5mb1xuICAgICAgICAgICAgICAgIG1lZGl1bT17c291cmNlLm1lZGl1bS5uYW1lfVxuICAgICAgICAgICAgICAgIG1lZGl1bVVybD17c291cmNlLnNvdXJjZV91cmx9XG4gICAgICAgICAgICAgICAgbW9kZXJhdG9yTmFtZT17c291cmNlLm1lZGlhX3BlcnNvbmFsaXR5Lm5hbWV9XG4gICAgICAgICAgICAgICAgcHVibGlzaGVkQXQ9e2FydGljbGUucHVibGlzaGVkX2F0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8U3RhdGVtZW50UG9wdXBcbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnQ9e3N0YXRlbWVudFBvcHVwfVxuICAgICAgICAgICAgICAgIG9mZnNldD17c3RhdGVtZW50UG9wdXBPZmZzZXR9XG4gICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVTdGF0ZW1lbnRQb3B1cENsb3NlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TaWRlYmFyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVDb250ZW50XG4iXX0= */\n/*@ sourceURL=components/ArticleContent.js */'
      })), React.createElement(_Sidebar2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, React.createElement(_SidebarInfo2.default, {
        medium: source.medium.name,
        mediumUrl: source.source_url,
        moderatorName: source.media_personality.name,
        publishedAt: article.published_at,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }), React.createElement(_StatementPopup2.default, {
        statement: statementPopup,
        offset: statementPopupOffset,
        onClose: this.handleStatementPopupClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      })), React.createElement('div', { className: 'col-sm-1', __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }))));
    }
  }]);

  return ArticleContent;
}(React.Component);

exports.default = ArticleContent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXJ0aWNsZUNvbnRlbnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJTdGF0ZW1lbnQiLCJmaW5kIiwicGF0aCIsInJlYWN0U3RyaW5nUmVwbGFjZSIsIlNpZGViYXIiLCJTdGF0ZW1lbnRQb3B1cCIsImVzY2FwZVN0cmluZ1JlZ2V4cCIsIlNpZGViYXJJbmZvIiwiQXJ0aWNsZUNvbnRlbnQiLCJzdGF0ZSIsInN0YXRlbWVudFBvcHVwIiwic3RhdGVtZW50UG9wdXBPZmZzZXQiLCJmaW5kQXNzZXNtZW50QnlJZCIsImlkIiwic3RhdGVtZW50cyIsInByb3BzIiwiYXJ0aWNsZSIsInN0YXRlbWVudCIsInZhbCIsImhhbmRsZVN0YXRlbWVudENsaWNrIiwicmVmIiwic2V0U3RhdGUiLCJvZmZzZXRUb3AiLCJoYW5kbGVTdGF0ZW1lbnRQb3B1cENsb3NlIiwiaW5zZXJ0TWFya3MiLCJ0ZXh0IiwicmVwbGFjZWRUZXh0Iiwic3RhdGVtZW50c0xvY2F0aW9ucyIsImZvckVhY2giLCJsb2NhdGlvbiIsIlJlZ0V4cCIsImZyYWdtZW50IiwicmVwbGFjZSIsIm1hdGNoIiwic291cmNlIiwidHJhbnNjcmlwdCIsIm1lZGl1bSIsIm5hbWUiLCJzb3VyY2VfdXJsIiwibWVkaWFfcGVyc29uYWxpdHkiLCJwdWJsaXNoZWRfYXQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxBQUFPOztJQUFQLEFBQVk7O0FBTVosQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQVMsQUFBTTs7QUFDZixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBTzs7OztBQUNQLEFBQU8sQUFBaUI7Ozs7Ozs7Ozs7O0lBWWxCLEE7Ozs7Ozs7Ozs7Ozs7OzROQUlKLEE7c0JBQVEsQUFDVSxBQUNoQjs0QkFGTSxBQUVnQixBO0FBRmhCLEFBQ04sYSxBQUlGLG9CQUFvQixVQUFBLEFBQUMsSUFBZTtVQUFBLEFBQ2YsYUFBaUIsTUFERixBQUNPLE1BRFAsQUFDMUIsUUFEMEIsQUFDZixBQUNuQjs7VUFBTSw2QkFBaUIsZUFBQTtlQUFPLElBQUEsQUFBSSxPQUFYLEFBQWtCO0FBQXZCLE9BQUEsRUFBbEIsQUFBa0IsQUFBMkIsQUFFN0M7O2FBQUEsQUFBTyxBQUNSO0EsYUFFRCxBLHVCQUF1QixVQUFBLEFBQUMsSUFBRCxBQUFhLEtBQWdCLEFBQ2xEO1VBQU0sWUFBWSxNQUFBLEFBQUssa0JBQXZCLEFBQWtCLEFBQXVCLEFBQ3pDO1lBQUEsQUFBSzt3QkFBUyxBQUNJLEFBQ2hCOzhCQUFzQixJQUZ4QixBQUFjLEFBRWMsQUFFN0I7QUFKZSxBQUNaO0EsYUFLSixBLDRCQUE0QixZQUFNLEFBQ2hDO1lBQUEsQUFBSyxTQUFTLEVBQUUsZ0JBQWhCLEFBQWMsQUFBa0IsQUFDakM7QSxhQUVELEEsY0FBYyxVQUFBLEFBQUMsTUFBaUIsQUFDOUI7VUFBSSxlQUFKLEFBQW1CLEFBQ25CO1lBQUEsQUFBSyxNQUFMLEFBQVcsb0JBQVgsQUFBK0IsUUFBUSxvQkFBWSxBQUNqRDtZQUFNLFlBQVksTUFBQSxBQUFLLGtCQUFrQixTQUF6QyxBQUFrQixBQUFnQyxBQUVsRDs7WUFBSSxDQUFKLEFBQUssV0FBVyxBQUNoQjt5REFBZSxBQUNiLGNBQ0EsSUFBQSxBQUFJLGFBQ0Usa0NBQW1CLFNBQW5CLEFBQTRCLFVBQTVCLEFBQXNDLFFBQXRDLEFBQ0YsYUFGSixBQUNNLEFBRUYscUJBTFMsQUFFYixBQUtFLE9BRUYsaUJBQUE7dUJBQ0UsQUFBQyw4REFBRCxBQUNNO3FCQUNLLE1BRlgsQUFFZ0IsQUFDZDtpQkFBSyxTQUhQLEFBR2dCOzt3QkFIaEI7MEJBQUEsQUFLRztBQUxIO0FBRUUsWUFGRixFQURGLEFBQ0U7QUFWSixBQUFlLEFBbUJoQixTQW5CZ0I7QUFKakIsQUF5QkE7O2FBQUEsQUFBTyxBQUNSO0E7Ozs7OzZCQUVRO21CQUNrQyxLQURsQyxBQUN1QztVQUR2QyxBQUNZLGdCQURaLEFBQ0MsUUFERCxBQUNZO1VBRFosQUFDc0IsaUJBRHRCLEFBQ3NCO21CQUNvQixLQUYxQyxBQUUrQztVQUYvQyxBQUVDLHdCQUZELEFBRUM7VUFGRCxBQUVpQiw4QkFGakIsQUFFaUIsQUFDeEI7O21CQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO09BQUEsUUFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjtlQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO2VBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNHO0FBREg7QUFBQSxjQUNHLEFBQUssWUFBWSxPQURwQixBQUNHLEFBQXdCO2lCQUQzQjthQURGLEFBQ0UsQUFRQTtBQVJBLGlCQVFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGVBQ0UsQUFBQztnQkFDUyxPQUFBLEFBQU8sT0FEakIsQUFDd0IsQUFDdEI7bUJBQVcsT0FGYixBQUVvQixBQUNsQjt1QkFBZSxPQUFBLEFBQU8sa0JBSHhCLEFBRzBDLEFBQ3hDO3FCQUFhLFFBSmYsQUFJdUI7O29CQUp2QjtzQkFERixBQUNFLEFBTUE7QUFOQTtBQUNFLGdCQUtGLEFBQUM7bUJBQUQsQUFDYSxBQUNYO2dCQUZGLEFBRVUsQUFDUjtpQkFBUyxLQUhYLEFBR2dCOztvQkFIaEI7c0JBaEJKLEFBU0UsQUFPRSxBQU1GO0FBTkU7QUFDRSx3Q0FLQyxXQUFMLEFBQWU7b0JBQWY7c0JBekJSLEFBQ0UsQUFDRSxBQUNFLEFBc0JFLEFBS1Q7QUFMUzs7Ozs7O0VBdEZpQixNQUFNLEEsQUE4Rm5DOztrQkFBQSxBQUFlIiwiZmlsZSI6IkFydGljbGVDb250ZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kYW5pZWwvd2ViZGV2L2RlbWFnb2cifQ==