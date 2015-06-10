(function () {
  'use strict';
  
  /**
   * 
   * @class TasksService
   * @constructor
   */
  function TasksService($resource){

    var tasksService = $resource('/api/tasks/:id',
      {
        'get': {
          transformResponse : function (data, headersGetter) {
            return angular.fromJson(data);
          }
        },
        'save':   {
          transformRequest: function (data, headersGetter) {
            return data;
          },
          transformResponse : function (data, headersGetter) {
            return angular.toJson({
              buytime: new Date().getTime(),
              books:angular.fromJson(data)
            });
          }
        },
        'query':  {
          isArray:true,
          transformResponse : function (data, headersGetter) {
            return angular.fromJson(data);
          }
        },
        'remove': {
          transformRequest: function (data, headersGetter) {
            return data;
          },
          transformResponse : function (data, headersGetter) {
            return angular.fromJson(data);
          }
        },
        'delete': {
          transformRequest: function (data, headersGetter) {
            return data;
          },
          transformResponse : function (data, headersGetter) {
            return angular.fromJson(data);
          }
        }
      }
    );
    return tasksService;
  }

  angular.module('demo.service.tasks',[
    'ngResource'
  ])
    .factory('TasksService', TasksService);

  TasksService.$inject = ['$resource'];
})();


