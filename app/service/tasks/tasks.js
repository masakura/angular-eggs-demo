(function () {
  'use strict';
  
  /**
   * 
   * @class TasksService
   * @constructor
   */
  function TasksService($resource){

    return $resource('/api/tas/:id', 
      /**
       default method
       {
        'get':    {method:'GET'},
        'save':   {method:'POST'},
        'query':  {method:'GET', isArray:true},
        'remove': {method:'DELETE'},
        'delete': {method:'DELETE'}
        };
        It describes only when these methods will be overridden.
        It can run without writing.
       */
      {
        'get': {
          transformResponse: function (data) {
            return angular.fromJson(data);
          }
        },
        'query':  {
           transformResponse: function (data) {
             return angular.fromJson(data);
           }
        }
      },
      /**
       optional method
       */
      {
        'update': {
          method:'PUT'
        }
      }
    );
  }

  angular.module('demo.service.tasks',[
    'ngResource'
  ])
    .factory('TasksService', TasksService);

  TasksService.$inject = ['$resource'];
})();


