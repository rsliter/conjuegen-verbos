'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){

  describe('VerbosCtrl', function() {
    var scope, controller, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('verbos/verbos.json').respond([{"infinitivo":"comer","yo":"como"}]);

      scope = $rootScope.$new();
      controller = $controller(VerbosCtrl, {$scope: scope});
    }));

    it('should create a Verbos model with a single verb', function() {
      $httpBackend.flush();
      expect(scope.verbo).toEqual({"infinitivo":"comer","yo":"como"});
    });

    it('sends incorrect message if verb is conjugated incorrectly', function() {
      $httpBackend.flush();
      scope.verbo.conjugado = "WRONG";
      scope.probeConjugado();
      expect(scope.verbo.correcto).toEqual(false);
    });

    it('sends correct message if verb is conjugated correctly', function() {
      $httpBackend.flush();
      scope.verbo.conjugado = "como";
      $httpBackend.expectGET('verbos/verbos.json').respond([{"infinitivo":"comer","yo":"como"}]);
      scope.probeConjugado();
      expect(scope.verbo.correcto).toEqual(true);
    });

    it('gets a new verb if verb is conjugated correctly', function() {
      $httpBackend.flush();
      scope.verbo.conjugado = "como";
      $httpBackend.expectGET('verbos/verbos.json').respond([{"infinitivo":"comer","yo":"como"}]);
      scope.probeConjugado();
    });
  });
});
