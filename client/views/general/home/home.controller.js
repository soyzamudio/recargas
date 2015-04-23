'use strict';

angular.module('recargas')
.controller('HomeController', ['$scope', function($scope) {
  $scope.country = {}
  $scope.providers = [
    { name: 'Telcel', range: '$1.00 - $100.00'},
    { name: 'Movistar', range: '$1.00 - $100.00'},
    { name: 'Unefon', range: '$1.00 - $100.00'},
    { name: 'Nextel', range: '$1.00 - $100.00'}
  ];
}]);
