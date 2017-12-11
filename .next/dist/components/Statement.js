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
      onClick = _ref.onClick;

  var statementRef = void 0;

  return React.createElement('a', {
    onClick: function (_onClick) {
      function onClick() {
        return _onClick.apply(this, arguments);
      }

      onClick.toString = function () {
        return _onClick.toString();
      };

      return onClick;
    }(function () {
      return onClick(assessment.id, statementRef);
    }),
    className: 'vyrok ' + getClassForVeracity(assessment.veracity.key),
    ref: function ref(_ref2) {
      statementRef = _ref2;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, children);
};

exports.default = Statement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiZ2V0Q2xhc3NGb3JWZXJhY2l0eSIsImtleSIsIlN0YXRlbWVudCIsImNoaWxkcmVuIiwiYXNzZXNzbWVudCIsIm9uQ2xpY2siLCJzdGF0ZW1lbnRSZWYiLCJpZCIsInZlcmFjaXR5IiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxBQUFPOztJQUFQLEFBQVk7Ozs7Ozs7QUFTWixJQUFNLHNCQUFzQixTQUF0QixBQUFzQixvQkFBQSxBQUFDLEtBQTZCLEFBQ3hEO1VBQUEsQUFBUSxBQUNOO1NBQUEsQUFBSyxBQUNIO2FBQUEsQUFBTyxBQUNUO1NBQUEsQUFBSyxBQUNIO2FBQUEsQUFBTyxBQUNUO1NBQUEsQUFBSyxBQUNIO2FBQUEsQUFBTyxBQUNUO1NBQUEsQUFBSyxBQUNIO2FBQUEsQUFBTyxBQUNUO0FBQ0U7T0FERixBQUNHLEFBQUMsS0FBWSxBQUNkO2FBWEosQUFXSSxBQUFPLEFBRVo7O0FBZEQ7O0FBZ0JBLElBQU0sWUFBWSxTQUFaLEFBQVksZ0JBQXVEO01BQXBELEFBQW9ELGdCQUFwRCxBQUFvRDtNQUExQyxBQUEwQyxrQkFBMUMsQUFBMEM7TUFBOUIsQUFBOEIsZUFBOUIsQUFBOEIsQUFDdkU7O01BQUksb0JBQUosQUFFQTs7ZUFDRSxjQUFBO2lDQUNFO3lCQUFBO29DQUFBO0FBQUE7O3FDQUFBO3dCQUFBO0FBQUE7O2FBQUE7TUFBUyxZQUFBO2FBQU0sUUFBUSxXQUFSLEFBQW1CLElBQXpCLEFBQU0sQUFBdUI7QUFEeEMsQUFDRSxBQUNBOzBCQUFvQixvQkFBb0IsV0FBQSxBQUFXLFNBRnJELEFBRXNCLEFBQXdDLEFBQzVEO1NBQUssb0JBQU8sQUFDVjtxQkFBQSxBQUFlLEFBQ2hCO0FBTEg7O2dCQUFBO2tCQUFBLEFBT0c7QUFQSDtBQUNFLEdBREYsRUFERixBQUNFLEFBVUg7QUFkRCxBQWdCQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJTdGF0ZW1lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RhbmllbC93ZWJkZXYvZGVtYWdvZyJ9