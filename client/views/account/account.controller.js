'use strict';

angular.module('recargas')
.controller('AccountController', ['$scope', function($scope) {
  $scope.tabData   = [
    { heading: 'Profile', route:   'account.info' },
    { heading: 'Billing', route:   'account.billing' },
    // { heading: 'Referral', route:   'account.referrals' },
  ];
}]);
