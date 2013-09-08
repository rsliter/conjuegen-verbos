'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/verbos', {templateUrl: 'partials/verbos.html', controller: 'VerbosCtrl'});
    $routeProvider.otherwise({redirectTo: '/verbos'});
  }]);
