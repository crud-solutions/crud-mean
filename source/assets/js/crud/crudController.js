(function() {
  'use strict';

  angular
  .module('crud')
  .controller('CrudController', CrudController);

  CrudController.$inject = ['$http', '$q', 'crudService', '$log'];

  function CrudController($http, $q, crudService, $log) {
    var vm = this;

    vm.formData = {};
    vm.edit = false;

    // Get Todos
    crudService.getTodos().then(function(answer) {
      vm.todos = answer;
    }, function(error) {
      console.log("OOPS!!!! " + JSON.stringify(error));
    });

    // Create a New Todo
    vm.createTodo = function() {
      crudService.createTodo(vm.formData).then(function(answer) {
        vm.todos = answer;
        vm.formData.text = '';
        vm.edit = false;
      }, function(error) {
        console.log("Error Creating Todo!!!! " + JSON.stringify(error));
      });
    };

    // edit a Todo
    vm.editTodo = function(id, txt, done) {
      vm.edit = true;
      vm.formData.id = id;
      vm.formData.text = txt;
      vm.formData.done = done;
    };

    // Update a Todo
    vm.updateTodo = function() {
      var updateData = {"text":vm.formData.text, "done": vm.formData.done};
      var id = vm.formData.id;

      crudService.updateTodo(id, updateData).then(function(answer) {
        vm.todos = answer;
        vm.formData.text = '';
        vm.edit = false;
      }, function(error) {
        console.log("OOPS Error Updating!!!! " + JSON.stringify(error));
      });
    };

    // Delete a Todo
    vm.deleteTodo = function(id) {
      crudService.deleteTodo(id).then(function(answer) {
        vm.todos = answer;
      }, function(error) {
        console.log("OOPS Error Deleting!!!! " + JSON.stringify(error));
      });
    };
  }
})();
