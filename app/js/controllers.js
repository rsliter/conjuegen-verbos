'use strict';

function VerbosCtrl($scope, $http) {
  $http.get('verbos/verbos.json').success(function(data) {
    $scope.verbos = data;
  });
}

//VerbosCtrl.$inject = ['$scope', '$http']
