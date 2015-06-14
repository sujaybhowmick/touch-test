/**
 * Created by quikr on 13/06/2015.
 */


angular.module('touchTestApp')
  .controller('SliderCtrl', function($scope){
    $scope.slides = [
      {image: 'images/img00.jpg', description: 'Image 00'},
      {image: 'images/img01.jpg', description: 'Image 01'},
      {image: 'images/img02.jpg', description: 'Image 02'},
      {image: 'images/img03.jpg', description: 'Image 03'},
      {image: 'images/img04.jpg', description: 'Image 04'}
    ];

    $scope.direction = 'left';
    $scope.currentIndex = 0;

    $scope.setCurrentSlideIndex = function (index) {
      $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
      $scope.currentIndex = index;
    };

    $scope.isCurrentSlideIndex = function (index) {
      return $scope.currentIndex === index;
    };

    $scope.prevSlide = function () {
      $scope.direction = 'left';
      $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    };

    $scope.nextSlide = function () {
      $scope.direction = 'right';
      $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    };

  });
