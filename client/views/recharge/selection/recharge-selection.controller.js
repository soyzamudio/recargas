'use strict';

angular.module('recargas')
.constant('clientTokenPath', '/client_token')
.controller('RechargeSelectionController', ['$rootScope', '$scope', '$braintree', '$http', function($rootScope, $scope, $braintree, $http) {
  $scope.topup = $rootScope.topup;
  console.log($scope.topup);
  $rootScope.data = null;

  var client;
  $braintree.getClientToken().success(function(token) {
    client = new $braintree.api.Client({
      clientToken: token
    });
  });

  $scope.inputForm = { receiver: '+522291112222' };

  $scope.dropinOptions = {
    paymentMethodNonceReceived: function(e, nonce) {
      e.preventDefault();
      $http.post('/recharge/checkout', {nonce: nonce, receiver: $scope.inputForm.receiver})
      .then(function(response) {
        console.log(response.data.transaction);
      });
    }
  };
}]);
