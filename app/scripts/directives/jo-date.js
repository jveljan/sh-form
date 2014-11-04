'use strict';

/**
 * @ngdoc directive
 * @name shFormApp.directive:joDate
 * @description
 * # joDate
 */
angular.module('shFormApp')
  .directive('joDate', function () {
    return {
      template: '<div ng-transclude></div>',
      restrict: 'E',
      require: '?ngModel',
      scope: {
      	options: '=',
        model: '=ngModel',
        onChange: '&'
      },
      transclude: true,
      link: function postLink(scope, element, attrs, ngModel) {
      	var ct = element.children()[0];
      	['class', 'id', 'style'].forEach(function(aName) {
      		jQuery(ct).attr(aName, jQuery(element).attr(aName));
      		jQuery(element).attr(aName, '');
      	});
    	
      	var datePickerEl = jQuery(ct);
    	
      	datePickerEl.datepicker(
      			jQuery.extend({
      				autoclose: true,
            	format: attrs.format || 'yyyy-mm-dd'
      			}, scope.options)
      	).on('changeDate', function(event) {
        	scope.$apply(function() {
        		
        		if(typeof scope.onChange === 'function') {
        			var utcDate = datePickerEl.datepicker('getUTCDate');
        			var val = scope.onChange({date: utcDate, event: event});
        			ngModel.$setViewValue(val || utcDate);
        		} else {
        			ngModel.$setViewValue(utcDate);
        		}
        	});
        });
      	
        scope.$watch('model', function(newValue, oldValue) {
        	if(newValue) {
        		var date = new Date(newValue);
        		if(isNaN(date.getTime())) {
        			console.warn('Unparsable date', newValue, 'check Date.parse() documentation for valid values.')
        		} else {        			
        			datePickerEl.datepicker('update', date);
        		}
        	}
        });
      }
    };
  });
