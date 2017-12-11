'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlRequest = require('graphql-request');

require('es6-promise').polyfill();
require('isomorphic-fetch');

var client = new _graphqlRequest.GraphQLClient('https://demagog.cz/graphql', {});

var getAllArticles = function getAllArticles() {
  return client.request('\n    {\n      articles {\n        id\n        slug\n        title\n        illustration\n        perex\n        source {\n          transcript\n        }\n      }\n    }\n  ').then(function (response) {
    return response.articles;
  });
};

var getArticleBySlug = function getArticleBySlug(slug) {
  return client.request('\n    query ($slug: String!) {\n      article(slug: $slug) {\n        illustration\n        title\n        perex\n        source {\n          transcript\n          source_url\n        }\n        statements {\n          id\n          speaker {\n            id\n            last_name\n            first_name\n          }\n          assessment {\n            id\n            explanation\n            veracity {\n              key\n              name\n            }\n          }\n          content\n        }\n      }\n    }\n    ', {
    slug: slug
  }).then(function (response) {
    return response.article;
  });
};

var getStatementLocations = function getStatementLocations(slug) {
  return fetch('https://demagog-speech-editor.herokuapp.com/data/' + slug).then(function (response) {
    return response.json();
  }).catch(function (error) {
    console.log(error);
    return [];
  });
};

exports.default = { getAllArticles: getAllArticles, getArticleBySlug: getArticleBySlug, getStatementLocations: getStatementLocations };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9hcGkuanMiXSwibmFtZXMiOlsiR3JhcGhRTENsaWVudCIsInJlcXVpcmUiLCJwb2x5ZmlsbCIsImNsaWVudCIsImdldEFsbEFydGljbGVzIiwicmVxdWVzdCIsInRoZW4iLCJyZXNwb25zZSIsImFydGljbGVzIiwiZ2V0QXJ0aWNsZUJ5U2x1ZyIsInNsdWciLCJhcnRpY2xlIiwiZ2V0U3RhdGVtZW50TG9jYXRpb25zIiwiZmV0Y2giLCJqc29uIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLEFBQVM7O0FBR1QsdUJBQUEsQUFBdUI7QUFDdkI7O0FBRUEsSUFBTSxTQUFTLEFBQUksa0NBQUosQUFBa0IsOEJBQWpDLEFBQWUsQUFBZ0Q7O0FBRS9ELElBQU0saUJBQWlCLFNBQWpCLEFBQWlCLGlCQUFBO2dCQUNyQixBQUNHLDBMQURILEFBaUJHLEtBQUssb0JBQUE7V0FBWSxTQUFaLEFBQXFCO0FBbEJSLEFBQ3JCLEdBQUE7QUFERjs7QUFvQkEsSUFBTSxtQkFBbUIsU0FBbkIsQUFBbUIsaUJBQUEsQUFBQyxNQUFEO2dCQUN2QixBQUNHO1VBREgsQUFnQ0k7QUFBQSxBQUNFLEdBakNOLEVBQUEsQUFvQ0csS0FBSyxvQkFBQTtXQUFZLFNBQVosQUFBcUI7QUFyQ04sQUFDdkI7QUFERjs7QUF1Q0EsSUFBTSx3QkFBd0IsU0FBeEIsQUFBd0Isc0JBQUEsQUFDNUIsTUFENEI7cUVBRzVCLEFBQTBELE1BQTFELEFBQ0csS0FBSyxvQkFBQTtXQUFZLFNBQVosQUFBWSxBQUFTO0FBRDdCLEdBQUEsRUFBQSxBQUVHLE1BQU0saUJBQVMsQUFDZDtZQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7V0FBQSxBQUFPLEFBQ1I7QUFSeUIsQUFHNUI7QUFIRixBQVVBOztrQkFBZSxFQUFFLGdCQUFGLGdCQUFrQixrQkFBbEIsa0JBQW9DLHVCQUFuRCxBQUFlIiwiZmlsZSI6ImFwaS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGFuaWVsL3dlYmRldi9kZW1hZ29nIn0=