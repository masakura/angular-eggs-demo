/**
 *
 *
 * @deprecated
 * @module components/todos
 */
(function () {
  'use strict';

  /**
   * AboutController
   *
   * @class AboutController
   * @constructor
   */
  function TodosController(TasksService) {
  	console.log('TodosController Constructor');
    this.TasksService = TasksService;
  }

  /**
  * My method description.  Like other pieces of your comment blocks,
  * this can span multiple lines.
  *
  * @method activate
  */
  TodosController.prototype.activate = function() {
  	console.log('TodosController activate Method');

    var _self = this;

    return this.TasksService.getAll().then(
      function(todos){
        _self.todos = todos;
      }).catch(function(e){});

  };

  angular.module('demo.todos', [
    'demo.service.tasks'
  ])
    .controller('TodosController', TodosController);

  TodosController.$inject = ['TasksService'];
})();
