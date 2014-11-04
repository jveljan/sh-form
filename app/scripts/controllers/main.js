'use strict';

/**
 * @ngdoc function
 * @name shFormApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shFormApp
 */
angular.module('shFormApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    //$scope.myDate = new Date('2014-03-03');
    // $scope.myDate = '2014-03-03T00:00:00.000Z';
    $scope.myDateOptions = {
    		autoclose: true
    }
    $scope.myDateFormat = function(date, event) {
    	//return date.getYear();
    	//debugger;
    	//return date.toUTCString();
    }
    $scope.myDate = '26 Dec 1984';
    
//    
//    jQuery('#sandbox-container .input-group.date').datepicker({
//    	autoclose: true
//    });
  });
