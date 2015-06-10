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
          transformRequest: function (data, headersGetter) {
            return data;
          },
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
          transformRequest: function (data, headersGetter) {
            return data;
          },
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

    return {
      get: function (id) {
        return tasksService.get({id: id}).$promise;
      },
      save: function (data) {
        return tasksService.save(data).$promise;
      },
      getAll: function () {
        return tasksService.query().$promise;
      },
      remove: function (id) {
        return tasksService.remove({id: id}).$promise;
      },
      delete: function (id) {
        return tasksService.delete({id: id}).$promise;
      }
    };
  }

  angular.module('demo.service.tasks',[
    'ngResource'
  ])
    .factory('TasksService', TasksService);

  TasksService.$inject = ['$resource'];
})();
