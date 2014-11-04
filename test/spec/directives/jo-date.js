'use strict';

describe('Directive: joDate', function () {

  // load the directive's module
  beforeEach(module('shFormApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<jo-date></jo-date>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the joDate directive');
  }));
});
