'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){

  describe('VerbosCtrl', function() {
    var scope, controller, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('verbos/verbos.json').respond([{"comer":{}}]);

      scope = $rootScope.$new();
      controller = $controller(VerbosCtrl, {$scope: scope});
    }));


    it('should create a Verbos model with a single verb', function() {
      $httpBackend.flush();
      expect(scope.verbos).toEqual([{"comer":{}}]);

    });
  });
});
