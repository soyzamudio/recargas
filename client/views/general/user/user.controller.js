'use strict';

angular.module('recargas')
.controller('UserController',
['$rootScope', '$scope', '$auth', '$state', '$window',
function($rootScope, $scope, $auth, $state, $window) {

  $scope.loginUser = function() {
    $auth.login($scope.loginForm)
    .then(login);
  };

  $scope.signup = function() {
    if ($scope.signupForm.pass === $scope.signupForm.veriPass) {
      $auth.signup({
        name: $scope.signupForm.name,
        email: $scope.signupForm.email,
        password: $scope.signupForm.pass
      }).then(login);
    }
  };

  function login(response) {
    $window.localStorage.user = JSON.stringify(response.data.user);
    $rootScope.user = response.data.user;
    $state.go('home');
  }

}]);
