angular.module('app').config(function ($httpProvider, securityService) {
  $httpProvider.interceptors.push(function () {
    return {
      request: function (config) {
        if (securityService.currentUser()) {
          config.headers['X-Auth-Token'] = securityService.currentUser().token;
        }
      }
    }
  })
});