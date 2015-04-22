'use strict';

angular.module('recargas')
.controller('HomeController', ['$http', '$scope', function($http, $scope) {
  $scope.test = function() {
    $http.post('/recharge/checkout').then(function(response) {
      console.log(response);
    });
  }
}]);
