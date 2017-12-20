'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _jsxFileName = '/Users/daniel/webdev/demagog/components/Statement.js';


var getClassForVeracity = function getClassForVeracity(key) {
  switch (key) {
    case 'true':
      return 'pravda';
    case 'false':
      return 'nepravda';
    case 'unverifiable':
      return 'neoveritelne';
    case 'misleading':
      return 'zavadejici';
    default:
      ;key; // eslint-disable-line
      return null;
  }
};

var Statement = function Statement(_ref) {
  var children = _ref.children,
      assessment = _ref.assessment,
      onClick = _ref.onClick,
      id = _ref.id;

  var statementRef = void 0;

  var handleOnClick = function handleOnClick() {
    onClick(id, statementRef);
  };

  return React.createElement('a', {
    onClick: handleOnClick,
    className: 'vyrok ' + getClassForVeracity(assessment.veracity.key),
    ref: function ref(_ref2) {
      statementRef = _ref2;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, children);
};

exports.default = Statement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiZ2V0Q2xhc3NGb3JWZXJhY2l0eSIsImtleSIsIlN0YXRlbWVudCIsImNoaWxkcmVuIiwiYXNzZXNzbWVudCIsIm9uQ2xpY2siLCJpZCIsInN0YXRlbWVudFJlZiIsImhhbmRsZU9uQ2xpY2siLCJ2ZXJhY2l0eSIsInJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsQUFBTzs7SUFBUCxBQUFZOzs7Ozs7O0FBU1osSUFBTSxzQkFBc0IsU0FBdEIsQUFBc0Isb0JBQUEsQUFBQyxLQUE2QixBQUN4RDtVQUFBLEFBQVEsQUFDTjtTQUFBLEFBQUssQUFDSDthQUFBLEFBQU8sQUFDVDtTQUFBLEFBQUssQUFDSDthQUFBLEFBQU8sQUFDVDtTQUFBLEFBQUssQUFDSDthQUFBLEFBQU8sQUFDVDtTQUFBLEFBQUssQUFDSDthQUFBLEFBQU8sQUFDVDtBQUNFO09BREYsQUFDRyxBQUFDLEtBQVksQUFDZDthQVhKLEFBV0ksQUFBTyxBQUVaOztBQWREOztBQWdCQSxJQUFNLFlBQVksU0FBWixBQUFZLGdCQUEyRDtNQUF4RCxBQUF3RCxnQkFBeEQsQUFBd0Q7TUFBOUMsQUFBOEMsa0JBQTlDLEFBQThDO01BQWxDLEFBQWtDLGVBQWxDLEFBQWtDO01BQXpCLEFBQXlCLFVBQXpCLEFBQXlCLEFBQzNFOztNQUFJLG9CQUFKLEFBRUE7O01BQU0sZ0JBQWdCLFNBQWhCLEFBQWdCLGdCQUFNLEFBQzFCO1lBQUEsQUFBUSxJQUFSLEFBQVksQUFDYjtBQUZELEFBSUE7O2VBQ0UsY0FBQTthQUFBLEFBQ1csQUFDVDswQkFBb0Isb0JBQW9CLFdBQUEsQUFBVyxTQUZyRCxBQUVzQixBQUF3QyxBQUM1RDtTQUFLLG9CQUFPLEFBQ1Y7cUJBQUEsQUFBZSxBQUNoQjtBQUxIOztnQkFBQTtrQkFBQSxBQU9HO0FBUEg7QUFDRSxHQURGLEVBREYsQUFDRSxBQVVIO0FBbEJELEFBb0JBOztrQkFBQSxBQUFlIiwiZmlsZSI6IlN0YXRlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGFuaWVsL3dlYmRldi9kZW1hZ29nIn0=