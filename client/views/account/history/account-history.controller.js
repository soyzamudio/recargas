'use strict';

angular.module('recargas')
.controller('AccountHistoryController', ['$scope', 'User', function($scope, User) {
  User.getHistory()
  .then(function(response) {
    $scope.history = response.data.topups
  });
}])
.filter('tel', function () {
    return function (phoneNumber) {
        if (!phoneNumber)
            return phoneNumber;

        return formatLocal('US', phoneNumber);
    }
})
.filter('int', function () {
    return function (phoneNumber) {
        if (!phoneNumber)
            return phoneNumber;
        return formatNumberForMobileDialing(countryForE164Number(phoneNumber), phoneNumber);
    }
})
