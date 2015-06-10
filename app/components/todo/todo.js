/**
 * 
 *
 * @deprecated 
 * @module components/todo
 */
(function () {
  'use strict';

  /**
   * AboutController
   *
   * @class AboutController
   * @constructor
   */
  function TodoController($routeParams, TasksService) {
  	console.log('TodoController Constructor');
    this.TasksService = TasksService;
    this.id = $routeParams.id;
  }

  /**
  * My method description.  Like other pieces of your comment blocks, 
  * this can span multiple lines.
  *
  * @method activate
  */
  TodoController.prototype.activate = function() {
  	console.log('TodoController activate Method');


    var _self = this;
    console.log(this.id);

    return this.TasksService.get({id: this.id}).$promise.then(
      function(todo){
        _self.todo = todo;
      }).catch(function(e){
        console.log(e);
      });
  };

  angular.module('demo.todo', [])
    .controller('TodoController', TodoController);

  TodoController.$inject = ['$routeParams', 'TasksService'];
})();
