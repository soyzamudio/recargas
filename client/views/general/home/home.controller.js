'use strict';

angular.module('recargas')
.controller('HomeController', ['$scope', '$http', 'TopUp', function($scope, $http, TopUp) {
  $scope.country = {}
  $scope.providers = [
    { name: 'Telcel', range: '$1.00 - $100.00', img: '/assets/telcel.jpg'},
    { name: 'Movistar', range: '$1.00 - $100.00', img: '/assets/movistar.jpg'},
    { name: 'Unefon', range: '$1.00 - $100.00', img: '/assets/unefon.jpg'},
    { name: 'Nextel', range: '$1.00 - $100.00', img: '/assets/nextel.jpg'}
  ];

  TopUp.getCount().then(function(response) {
    $scope.count = response.data.count;
  });
}]);
