'use strict';

/**
 * @ngdoc function
 * @name shFormApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the shFormApp
 */
angular.module('shFormApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
