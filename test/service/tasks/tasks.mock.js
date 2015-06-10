(function(){
  'use strict';

  function TasksService(){
    
    var mockData = {
          $valid: true
        };

    var someSpy = jasmine.createSpy().and.returnValue({
      then:function(cb){
        cb(mockData);
        return {
          catch: function () {
            /* Default Case Not Exeption; */
          }
        };
      }
    });

    return {
      some: someSpy,
      mockData: mockData
    };
  }

  angular.module('demo.mock.service.tasks',[])
    .factory('TasksService', TasksService);
})();