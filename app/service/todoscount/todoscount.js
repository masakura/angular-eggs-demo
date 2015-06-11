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
      counter: 0
    };
  }

  angular.module('demo.service.todoscount',[
  ]).factory('TodoscountService', TodoscountService);

  TodoscountService.$inject = [];
})();


