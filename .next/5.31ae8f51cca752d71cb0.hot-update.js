webpackHotUpdate(5,{

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlRequest = __webpack_require__(395);

var client = new _graphqlRequest.GraphQLClient('https://demagog.cz/graphql', {});

var getAllArticles = function getAllArticles() {
  return client.request('\n    {\n      articles {\n        id\n        slug\n      }\n    }\n  ').then(function (response) {
    return response.articles;
  });
};

var getArticleBySlug = function getArticleBySlug(slug) {
  return client.request('\n    query ($slug: String!) {\n      article(slug: $slug) {\n        source {\n          transcript\n        }\n        statements {\n          speaker {\n            id\n            last_name\n            first_name\n          }\n          assessment {\n            id\n            veracity {\n              key\n              name\n            }\n          }\n          content\n        }\n      }\n    }\n    ', {
    slug: slug
  }).then(function (response) {
    return response.article;
  });
};

exports.default = { getAllArticles: getAllArticles, getArticleBySlug: getArticleBySlug };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9hcGkuanMiXSwibmFtZXMiOlsiR3JhcGhRTENsaWVudCIsImNsaWVudCIsImdldEFsbEFydGljbGVzIiwicmVxdWVzdCIsInRoZW4iLCJyZXNwb25zZSIsImFydGljbGVzIiwiZ2V0QXJ0aWNsZUJ5U2x1ZyIsInNsdWciLCJhcnRpY2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxBQUFTOztBQUdULElBQU0sU0FBUyxBQUFJLGtDQUFKLEFBQWtCLDhCQUFqQyxBQUFlLEFBQWdEOztBQUUvRCxJQUFNLGlCQUFpQixTQUFqQixBQUFpQixpQkFBQTtnQkFDckIsQUFDRyxtRkFESCxBQVdHLEtBQUssb0JBQUE7V0FBWSxTQUFaLEFBQXFCO0FBWlIsQUFDckIsR0FBQTtBQURGOztBQWNBLElBQU0sbUJBQW1CLFNBQW5CLEFBQW1CLGlCQUFBLEFBQUMsTUFBRDtnQkFDdkIsQUFDRztVQURILEFBMEJJO0FBQUEsQUFDRSxHQTNCTixFQUFBLEFBOEJHLEtBQUssb0JBQUE7V0FBWSxTQUFaLEFBQXFCO0FBL0JOLEFBQ3ZCO0FBREYsQUFpQ0E7O2tCQUFlLEVBQUUsZ0JBQUYsZ0JBQWtCLGtCQUFqQyxBQUFlIiwiZmlsZSI6ImFwaS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGFuaWVsL3dlYmRldi9kZW1hZ29nIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/daniel/webdev/demagog/lib/api.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/daniel/webdev/demagog/lib/api.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4zMWFlOGY1MWNjYTc1MmQ3MWNiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL2FwaS5qcz80NDMzODQ3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5pbXBvcnQgeyBHcmFwaFFMQ2xpZW50IH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0J1xuaW1wb3J0IHR5cGUgeyBBcnRpY2xlTGlzdCwgQXJ0aWNsZSB9IGZyb20gJy4vdHlwZXMnXG5cbmNvbnN0IGNsaWVudCA9IG5ldyBHcmFwaFFMQ2xpZW50KCdodHRwczovL2RlbWFnb2cuY3ovZ3JhcGhxbCcsIHt9KVxuXG5jb25zdCBnZXRBbGxBcnRpY2xlcyA9ICgpOiBQcm9taXNlPD9BcnRpY2xlTGlzdD4gPT5cbiAgY2xpZW50XG4gICAgLnJlcXVlc3QoXG4gICAgICBgXG4gICAge1xuICAgICAgYXJ0aWNsZXMge1xuICAgICAgICBpZFxuICAgICAgICBzbHVnXG4gICAgICB9XG4gICAgfVxuICBgLFxuICAgIClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5hcnRpY2xlcylcblxuY29uc3QgZ2V0QXJ0aWNsZUJ5U2x1ZyA9IChzbHVnOiBzdHJpbmcpOiBQcm9taXNlPEFydGljbGU+ID0+XG4gIGNsaWVudFxuICAgIC5yZXF1ZXN0KFxuICAgICAgYFxuICAgIHF1ZXJ5ICgkc2x1ZzogU3RyaW5nISkge1xuICAgICAgYXJ0aWNsZShzbHVnOiAkc2x1Zykge1xuICAgICAgICBzb3VyY2Uge1xuICAgICAgICAgIHRyYW5zY3JpcHRcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZW1lbnRzIHtcbiAgICAgICAgICBzcGVha2VyIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBsYXN0X25hbWVcbiAgICAgICAgICAgIGZpcnN0X25hbWVcbiAgICAgICAgICB9XG4gICAgICAgICAgYXNzZXNzbWVudCB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgdmVyYWNpdHkge1xuICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb250ZW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgYCxcbiAgICAgIHtcbiAgICAgICAgc2x1ZyxcbiAgICAgIH0sXG4gICAgKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmFydGljbGUpXG5cbmV4cG9ydCBkZWZhdWx0IHsgZ2V0QWxsQXJ0aWNsZXMsIGdldEFydGljbGVCeVNsdWcgfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2FwaS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBVUE7QUFYQTtBQURBO0FBQ0E7QUFhQTtBQUVBO0FBeUJBO0FBQ0E7QUFHQTtBQTlCQTtBQWdDQTtBQUNBO0FBREE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==