// jshint devel:true
(function () {
  'use strict';

  function AppConfig($locationProvider){
    /*
      # Hashbang Mode
      http://www.example.com/#/aaa/
      # HTML5 Mode
      http://www.example.com/aaa/
    */
    $locationProvider.html5Mode(true);
  }

  AppConfig.$inject = ['$locationProvider'];
  
  function AppController(TodoscountService, TasksService, GruntfilesService, $rootScope) {
    console.log('AppController Constructor');

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

  angular.module('demo', [
    'ngNewRouter',
    'demo.home',
    'demo.about',
    'demo.contact',
    'demo.todos',
    'demo.todo',
    'demo.directive.message',
    'demo.service.todoscount',
    'demo.service.tasks',
    'demo.service.gruntfiles'
    ])
    .config(AppConfig)
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    { path: '/',          redirectTo: '/home' },
    { path: '/home',       component: 'home' },
    { path: '/about',      component: 'about' },
    { path: '/contact',    component: 'contact' },
    { path: '/todos',      component: 'todos' },
    { path: '/todo/:id',   component: 'todo' }
  ];

  AppController.$inject = ['TodoscountService', 'TasksService', 'GruntfilesService', '$rootScope'];
})();