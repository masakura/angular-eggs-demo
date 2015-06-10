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
  function TodoController($routeParams, $location, TasksService) {
  	console.log('TodoController Constructor');
    this.TasksService = TasksService;
    this.id = $routeParams.id;
    this.$location = $location;
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
    
    return this.TasksService.get({id: _self.id}).$promise.then(
      function(todo){
        _self.todo = todo;
      }).catch(function(e){
        console.log(e);
      });
  };

  TodoController.prototype.back = function() {
    console.log('back');
    this.$location.path('/todos');
  }; 

  TodoController.prototype.add = function() {
    console.log('add');
    var _self = this;
    var data = JSON.stringify({
      'title': this.todo.title,
      'desc': this.todo.desc
    });
    this.TasksService.save(data).$promise.then(
      function(){
        return ;
      }).catch(function(e){
        console.log(e);
      });

  }; 

  TodoController.prototype.update = function() {
    console.log('update');

    var _self = this;
    var data = JSON.stringify({
      'id': this.id,
      'title': this.todo.title,
      'desc': this.todo.desc
    });
    console.log(data);
    this.TasksService.update(data).$promise.then(
      function(){
        return ;
      }).catch(function(e){
        console.log(e);
      });

  }; 

  TodoController.prototype.delete = function() {
    console.log('delete');

    var _self = this;

    this.TasksService.remove({id: this.id}).$promise.then(
      function(){
        return ;
      }).catch(function(e){
        console.log(e);
      });

    this.$location.path('/todos');
  }; 

  angular.module('demo.todo', [])
    .controller('TodoController', TodoController);

  TodoController.$inject = ['$routeParams', '$location', 'TasksService'];
})();
