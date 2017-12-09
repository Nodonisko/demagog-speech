'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/daniel/webdev/demagog/components/Statement.js';


var getColorForVeracity = function getColorForVeracity(key) {
  switch (key) {
    case 'true':
      return 'green';
    case 'false':
      return 'red';
    case 'unverifiable':
      return 'yellow';
    case 'misleading':
      return 'orange';
    default:
      ;key;
      return null;
  }
};

var Statement = function Statement(_ref) {
  var children = _ref.children,
      assessment = _ref.assessment;
  return React.createElement('b', {
    className: _style2.default.dynamic([['573245164', [getColorForVeracity(assessment.veracity.key)]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, children, React.createElement(_style2.default, {
    styleId: '573245164',
    css: 'b.__jsx-style-dynamic-selector{color:' + getColorForVeracity(assessment.veracity.key) + ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCZ0IsQUFDcUMsbUNBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9TdGF0ZW1lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RhbmllbC93ZWJkZXYvZGVtYWdvZyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgU3RhdGVtZW50IGFzIFN0YXRlbWVudFR5cGUsIFZlcmFjaXR5S2V5IH0gZnJvbSAnLi4vbGliL3R5cGVzJ1xuXG50eXBlIFN0YXRlbWVudFByb3BzID0ge1xuICAuLi5TdGF0ZW1lbnRUeXBlLFxuICBjaGlsZHJlbjogc3RyaW5nLFxufVxuXG5jb25zdCBnZXRDb2xvckZvclZlcmFjaXR5ID0gKGtleTogVmVyYWNpdHlLZXkpOiBzdHJpbmcgPT4ge1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ3RydWUnOlxuICAgICAgcmV0dXJuICdncmVlbidcbiAgICBjYXNlICdmYWxzZSc6XG4gICAgICByZXR1cm4gJ3JlZCdcbiAgICBjYXNlICd1bnZlcmlmaWFibGUnOlxuICAgICAgcmV0dXJuICd5ZWxsb3cnXG4gICAgY2FzZSAnbWlzbGVhZGluZyc6XG4gICAgICByZXR1cm4gJ29yYW5nZSdcbiAgICBkZWZhdWx0OlxuICAgICAgOyhrZXk6IGVtcHR5KVxuICAgICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5jb25zdCBTdGF0ZW1lbnQgPSAoeyBjaGlsZHJlbiwgYXNzZXNzbWVudCB9OiBTdGF0ZW1lbnRQcm9wcykgPT4gKFxuICA8Yj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YGIge2NvbG9yOiAke2dldENvbG9yRm9yVmVyYWNpdHkoXG4gICAgICBhc3Nlc3NtZW50LnZlcmFjaXR5LmtleSxcbiAgICApfX1gfTwvc3R5bGU+XG4gIDwvYj5cbilcblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVtZW50XG4iXX0= */\n/*@ sourceURL=components/Statement.js */',
    dynamic: [getColorForVeracity(assessment.veracity.key)]
  }));
};

exports.default = Statement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiZ2V0Q29sb3JGb3JWZXJhY2l0eSIsImtleSIsIlN0YXRlbWVudCIsImNoaWxkcmVuIiwiYXNzZXNzbWVudCIsInZlcmFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsQUFBTzs7SUFBUCxBQUFZOzs7Ozs7Ozs7QUFRWixJQUFNLHNCQUFzQixTQUF0QixBQUFzQixvQkFBQSxBQUFDLEtBQTZCLEFBQ3hEO1VBQUEsQUFBUSxBQUNOO1NBQUEsQUFBSyxBQUNIO2FBQUEsQUFBTyxBQUNUO1NBQUEsQUFBSyxBQUNIO2FBQUEsQUFBTyxBQUNUO1NBQUEsQUFBSyxBQUNIO2FBQUEsQUFBTyxBQUNUO1NBQUEsQUFBSyxBQUNIO2FBQUEsQUFBTyxBQUNUO0FBQ0U7T0FBQyxBQUFDLEFBQ0Y7YUFYSixBQVdJLEFBQU8sQUFFWjs7QUFkRDs7QUFnQkEsSUFBTSxZQUFZLFNBQVosQUFBWSxnQkFBQTtNQUFBLEFBQUcsZ0JBQUgsQUFBRztNQUFILEFBQWEsa0JBQWIsQUFBYTtlQUM3QixjQUFBO3VEQUUyQixvQkFDdkIsV0FBQSxBQUFXLFNBSGYsQUFFMkIsQUFDSDs7Z0JBSHhCO2tCQUFBLEFBQ0c7QUFESDtBQUFBLEdBQUEsRUFBQTthQUFBO21EQUUyQixvQkFDdkIsV0FBQSxBQUFXLFNBSGYsQUFFMkIsQUFDSCxPQUh4QjtjQUUyQixvQkFDdkIsV0FBQSxBQUFXLFNBSkMsQUFDaEIsQUFFMkIsQUFDSDtBQUh4QjtBQURGLEFBU0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoiU3RhdGVtZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kYW5pZWwvd2ViZGV2L2RlbWFnb2cifQ==