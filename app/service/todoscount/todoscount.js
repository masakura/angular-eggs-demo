(function () {
  'use strict';
  
  /**
   * 
   * @class TodoscountService
   * @constructor
   */
  function TodoscountService() {
    
    // Public API here
    return {
      tasks: 0,
      about: 0
    };
  }

  angular.module('demo.service.todoscount',[
  ]).factory('TodoscountService', TodoscountService);

  TodoscountService.$inject = [];
})();


