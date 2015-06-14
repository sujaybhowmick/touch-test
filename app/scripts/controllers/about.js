'use strict';

/**
 * @ngdoc function
 * @name touchTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the touchTestApp
 */
angular.module('touchTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
