(function() {
  'use strict';

  angular
  .module('crud')
  .factory('crudService', crudService);

  crudService.$inject = ['$http', '$q'];

  function crudService($http, $q) {
    var vm = this;

    var service = {};

    service.getTodos = function() {
      var deferred = $q.defer();
      $http.get('/api/todos/').
      success(function(data) {
          deferred.resolve(data);
      }).
      error(function(reason) {
          deferred.reject(reason);
      });
      return deferred.promise
    }

    service.createTodo = function(todo) {
      var deferred = $q.defer();
      $http.post('/api/todos/', todo).
      success(function(data) {
        deferred.resolve(data);
      }).
      error(function(reason) {
        deferred.reject(reason);
      });
      return deferred.promise
    }

    service.updateTodo = function(id, updateData) {
      var deferred = $q.defer();

      $http.put('/api/todos/' + id, updateData).
      success(function(data) {
        deferred.resolve(data);
      }).
      error(function(reason) {
        deferred.reject(reason);
      });
      return deferred.promise
    }

    service.deleteTodo = function(id) {
      var deferred = $q.defer();
      $http.delete('/api/todos/' + id).
      success(function(data) {
        deferred.resolve(data);
      }).
      error(function(reason) {
        deferred.reject(reason);
      });
      return deferred.promise
    }

    return service;
  };

})();
