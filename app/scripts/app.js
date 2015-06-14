'use strict';

/**
 * @ngdoc overview
 * @name touchTestApp
 * @description
 * # touchTestApp
 *
 * Main module of the application.
 */
angular
  .module('touchTestApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/slider',{
        templateUrl: 'views/photo_slider.html',
        controller: 'SliderCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
