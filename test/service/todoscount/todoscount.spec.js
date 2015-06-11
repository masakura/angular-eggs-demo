(function () {
  'use strict';

  describe('Service: TodoscountService', function () {

    var TodoscountService, $rootScope;

    beforeEach(module('demo.service.todoscount'));

    beforeEach(inject(function (_$rootScope_, _TodoscountService_) {
      TodoscountService = _TodoscountService_;
      $rootScope = _$rootScope_;
    }));

    describe('someThing',function(){
      it('someThing',function(){

      });
    });
  });
})();