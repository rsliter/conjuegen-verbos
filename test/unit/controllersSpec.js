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
      expect(scope.verbo).toEqual("como");
    });

    it('should create a Verbo model', function() {
      $httpBackend.flush();
      expect(scope.infinitivo).toEqual("comer");
    });

    it('should create an Articulo model with a random Articulo', function() {
      $httpBackend.flush();
      expect(scope.articulo).not.toBe(null);
    });

    it('sends incorrect message if verb is conjugated incorrectly', function() {
      $httpBackend.flush();
      scope.verbo = "como";
      scope.conjugado = "WRONG";
      scope.probeConjugado();
      expect(scope.correcto).toEqual(false);
    });

    it('sends correct message if verb is conjugated correctly', function() {
      $httpBackend.flush();
      scope.verbo = "como";
      scope.conjugado = "como";
      $httpBackend.expectGET('verbos/verbos.json').respond([{"infinitivo":"comer","yo":"como"}]);
      scope.probeConjugado();
      expect(scope.correcto).toEqual(true);
    });

    it('gets a new verb if verb is conjugated correctly', function() {
      $httpBackend.flush();
      scope.verbo = "como";
      scope.conjugado = "como";
      $httpBackend.expectGET('verbos/verbos.json').respond([{"infinitivo":"comer","yo":"como"}]);
      scope.probeConjugado();
    });

    it('clears the conjugated Model after testing for correctness', function() {
      $httpBackend.flush();
      scope.probeConjugado();
      expect(scope.conjugado).toBe("");
    });
  });
});
