'use strict';

angular.module('recargas')
  .factory('User', ['$rootScope', '$http', function($rootScope, $http) {

    function getBilling() {
      return $http.get('/account/billing', {braintreeId: $rootScope.user.braintreeId});
    }

    return { getBilling:getBilling };
  }]);
