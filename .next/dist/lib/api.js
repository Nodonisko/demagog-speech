'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlRequest = require('graphql-request');

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