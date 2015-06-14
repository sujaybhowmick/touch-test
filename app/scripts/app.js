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
      .when('/',{
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
