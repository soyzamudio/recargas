'use strict';

angular.module('recargas',
['ui.router', 'ngMessages', 'ui.bootstrap', 'ui.router.tabs', 'satellizer', 'braintree-angular', 'mcwebb.countrycodes', 'ui.select', 'ngSanitize'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {url:'/', templateUrl:'/views/general/home/home.html', controller: 'HomeController'})
    .state('how', {url:'/how', templateUrl:'/views/general/how/how.html'})
    .state('faq', {url:'/faq', templateUrl:'/views/general/faq/faq.html'})
    .state('about', {url:'/about', templateUrl:'/views/general/about/about.html'})
    .state('contact', {url:'/contact', templateUrl:'/views/general/contact/contact.html', controller: 'ContactController'})
    .state('user', {url:'/user', templateUrl:'/views/general/user/user.html', controller: 'UserController'})

    .state('recharge', {url: '/recharge', templateUrl: '/views/recharge/recharge.html', controller: 'RechargeController', abstract: true})
    .state('recharge.selection', {url: '', templateUrl: '/views/recharge/selection/recharge-selection.html', controller: 'RechargeSelectionController'})
    .state('recharge.receipt', {url: '/receipt', templateUrl: '/views/recharge/receipt/recharge-receipt.html', controller: 'RechargeReceiptController'})

    .state('account', {url: '/account', templateUrl: '/views/account/account.html', controller: 'AccountController', abstract: true})
    .state('account.info', {url: '', templateUrl: '/views/account/info/account-info.html', controller: 'AccountInfoController'})
    .state('account.billing', {url: '/billing', templateUrl: '/views/account/billing/account-billing.html', controller: 'AccountBillingController'})
    .state('account.referrals', {url: '/referrals', templateUrl: '/views/account/referrals/account-referrals.html', controller: 'AccountReferralsController'})
    .state('account.history', {url: '/history', templateUrl: '/views/account/history/account-history.html', controller: 'AccountHistoryController'});
}])
.run(['$rootScope', '$window', '$auth', 'User', 'CountryCodes', function($rootScope, $window, $auth, User, CountryCodes) {
  $rootScope.countries = CountryCodes.getList();
  console.log($auth.isAuthenticated());
  if ($auth.isAuthenticated()) {
    $rootScope.user = JSON.parse($window.localStorage.user);
    User.getBilling().then(function(response) {
      $rootScope.billing = response.data.customer;
    });
  }
}]);
