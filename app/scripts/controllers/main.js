'use strict';

/**
 * @ngdoc function
 * @name touchTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the touchTestApp
 */
angular.module('touchTestApp')
  .controller('MainCtrl', function ($scope) {

    $scope.clickMe = function(){
      console.log('Button Clicked');
    }

    $scope.linkClicked = function(){
      console.log('linked clicked');
    }
  });
