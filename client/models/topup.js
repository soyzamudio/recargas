'use strict';

angular.module('recargas')
.factory('TopUp', ['$http', function($http) {

  function getCount() {
    return $http.get('/count');
  }

  return {getCount:getCount}
}])
