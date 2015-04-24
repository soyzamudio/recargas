'use strict';

angular.module('recargas')
  .factory('User', ['$rootScope', '$http', function($rootScope, $http) {

    function getBilling() {
      return $http.get('/account/billing', {braintreeId: $rootScope.user.braintreeId});
    }

    function getHistory() {
      return $http.get('/account/history');
    }

    return { getBilling:getBilling, getHistory:getHistory };
  }]);
