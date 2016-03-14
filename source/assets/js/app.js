(function() {
  'use strict';

  var crud = angular.module('crud', ['ngRoute']);

  crud.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'main.tpl.html',
      controller: 'CrudController',
      controllerAs: 'main',
      reloadOnSearch: false
    }).otherwise({
      redirectTo: '/'
    });
  }]);

})();
