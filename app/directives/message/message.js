(function () {
  'use strict';
  /**
   * 
   * @class messageDirective
   * @constructor
   */
  function messageDirective(){
    function messageLink(scope, element, attrs){

      /*
        some method
      */
      
    }

    return {
      restrict: 'AE',
      replace: false,
      templateUrl: 'directives/message/message.html',
      scope: {
        text: '='
      },
      link: messageLink
    };
  }

  angular.module('demo.directive.message',[])
    .directive('demoMessage', messageDirective);

  messageDirective.$inject = [];
})();
