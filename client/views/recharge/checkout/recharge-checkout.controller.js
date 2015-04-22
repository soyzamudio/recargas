'use strict';

angular.module('recargas')
.constant('clientTokenPath', '/client_token')
.controller('RechargeCheckoutController', ['$scope', '$braintree', '$http', function($scope, $braintree, $http) {
  var client;
  $braintree.getClientToken().success(function(token) {
    client = new $braintree.api.Client({
      clientToken: token
    });
  });

  $scope.dropinOptions = {
    paymentMethodNonceReceived: function(e, nonce) {
      e.preventDefault();
      $http.post('/recharge/checkout', {nonce: nonce})
      .then(function(response) {
        console.log(response);
      });
    }
  };


}]);
