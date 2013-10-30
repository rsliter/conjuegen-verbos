'use strict';

function VerbosCtrl($scope, $http) {
  self.getVerbo = function(){
    $http.get('verbos/verbos.json').success(function(data) {
      var randomVerbIndex = Math.floor(Math.random() * data.length)
      $scope.verbo = data[randomVerbIndex];
    });
  }

  self.getVerbo();

  $scope.probeConjugado = function() {
    if ($scope.verbo.yo == $scope.verbo.conjugado){
      $scope.verbo.correcto = true;
      self.getVerbo();
    } else {
      $scope.verbo.correcto = false;
    }
  };


}


//VerbosCtrl.$inject = ['$scope', '$http']
