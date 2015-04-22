'use strict';

angular.module('recargas')
  .controller('NavCtrl', ['$rootScope', '$scope', 'User', '$auth', '$window', function($rootScope, $scope, User, $auth, $window) {
    $scope.logout = function(){
      User.logout().then(function(){
        delete $rootScope.email;
      });
    };

    $scope.logout = function() {
      delete $rootScope.user;
      $window.localStorage.clear();
      $auth.logout();
    };
  }]);
