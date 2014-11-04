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
    
    // initial value
    $scope.myDate = new Date('1984-03-26');
    //$scope.myDate = '26 Dec 1984';
    //$scope.myDate = '2014-03-03T00:00:00.000Z';
    
    //optional
    $scope.myDateOptions = {
    		autoclose: true
      };
    //optional, convert date to string or use event.date for local dates
    $scope.myDateFormat = function(date, event) {
    	//return event.date.toUTCString();
      console.log(date, event);
    };
    
    
    jQuery('#timepicker1').timepicker();
  });
