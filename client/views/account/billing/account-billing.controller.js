'use strict';

angular.module('recargas')
.controller('AccountBillingController', ['$scope', 'User', function($scope, User) {

  User.getBilling().then(function(response) {
    $scope.billing = response.data.customer;
  });

}]);
