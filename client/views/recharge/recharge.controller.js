'use strict';

angular.module('recargas')
.controller('RechargeController', ['$scope', function($scope) {
  $scope.tabData   = [
    { heading: 'Selection', route: 'recharge.selection' },
    { heading: 'Receipt', route: 'recharge.receipt' }
  ];
}]);
