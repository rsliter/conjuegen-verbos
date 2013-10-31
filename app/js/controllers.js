'use strict';

function VerbosCtrl($scope, $http) {
  var indexDeInfinitivo = 0;

  self.getVerbo = function(){
    $http.get('verbos/verbos.json').success(function(data) {
      var randomVerbIndex = Math.floor(Math.random() * data.length);
      var verboArticulos = data[randomVerbIndex];


      var articulos = Object.keys(verboArticulos)
      articulos.splice(articulos.indexOf('infinitivo'), 1);
      var randomArticuloIndex = Math.floor(Math.random() * articulos.length);

      $scope.articulo = articulos[randomArticuloIndex];
      $scope.verbo = verboArticulos[$scope.articulo];
      $scope.infinitivo = verboArticulos["infinitivo"];
    });
  };

  self.getVerbo();

  $scope.probeConjugado = function() {
    if ($scope.verbo == $scope.conjugado){
      $scope.correcto = true;
      self.getVerbo();
    } else {
      $scope.correcto = false;
    }

    $scope.conjugado = "";
  };

}


//VerbosCtrl.$inject = ['$scope', '$http']
