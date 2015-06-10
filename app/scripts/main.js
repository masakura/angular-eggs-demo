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

  function AppController () {}

  angular.module('demo', [
    'ngNewRouter',
    'demo.home',
    'demo.about',
    'demo.contact',
    'demo.todos',
    'demo.todo'
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
})();