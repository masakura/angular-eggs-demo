/**
 * 
 *
 * @deprecated 
 * @module components/contact
 */
(function () {
  'use strict';

  /**
   * HeaderController
   *
   * @class HeaderController
   * @constructor
   */
  function HeaderController(TodoscountService, TasksService, GruntfilesService, $rootScope) {
  	console.log('HeaderController Constructor');
    var _self = this;

    $rootScope.$watch(function(){
      return TodoscountService.tasks;
    }, function() {
      _self.todos = TodoscountService.tasks;
    });

    TasksService.query().$promise.then (
      function(todos){
        TodoscountService.tasks = todos.length;
      }).catch( function(e){ });

    $rootScope.$watch(function(){
      return TodoscountService.about;
    }, function(){
      _self.about = TodoscountService.about;
    });

    GruntfilesService.query().$promise.then (
      function(about){
        TodoscountService.about = about.length;
      }).catch( function(e){ });
  }

  /**
  * My method description.  Like other pieces of your comment blocks, 
  * this can span multiple lines.
  *
  * @method activate
  * @param {String} foo Argument 1
  * @param {Object} config A config object
  * @param {String} config.name The name on the config object
  * @param {Function} config.callback A callback function on the config object
  * @param {Boolean} [extra=false] Do extra, optional work
  * @return {Boolean} Returns true on success
  */
  HeaderController.prototype.activate = function() {
  	console.log('HeaderController activate Method');

  };

  angular.module('demo.header', [
      'demo.service.todoscount',
      'demo.service.tasks',
      'demo.service.gruntfiles'
    ])
    .controller('HeaderController', HeaderController);

  HeaderController.$inject = ['TodoscountService', 'TasksService', 'GruntfilesService', '$rootScope'];
})();
