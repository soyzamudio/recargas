'use strict';

angular.module('recargas')
.controller('HomeController', ['$rootScope', '$scope', '$state', 'TopUp', function($rootScope, $scope, $state, TopUp) {
  $scope.country = {}
  $scope.providers = [
    { country: 'Mexico', name: 'Telcel', range: '$1.00 - $100.00', img: '/assets/telcel.jpg'},
    { country: 'Mexico', name: 'Movistar', range: '$1.00 - $100.00', img: '/assets/movistar.jpg'},
    { country: 'Mexico', name: 'Unefon', range: '$1.00 - $100.00', img: '/assets/unefon.jpg'},
    { country: 'Mexico', name: 'Nextel', range: '$1.00 - $100.00', img: '/assets/nextel.jpg'}
  ];

  TopUp.getCount().then(function(response) {
    // $scope.count = response.data.count < 500000 ? 543678 : response.data.count
    $scope.count = response.data.count;
  });

  $scope.select = function(data) {
    $rootScope.topup = {country: data.country, provider: data.name};
    $state.go('recharge.selection')
  }

}]);
