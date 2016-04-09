angular.module('app').factory('securityService', ['$http', function($http) {
  var service = {};
  var currentUser;
  
  var loginSuccess = function(response) {
    currentUser = {
      username: response.data.username,
      roles: response.data.roles,
      token: response.data['access_token']
    };
  };
  
  var loginFailure = function() {
    currentUser = undefined
  };
  
  service.login = function(username, password) {
    return $http.post('/api/login', {username: username, password: password}).then(loginSuccess, loginFailure);
  };
  
  service.currentUser = function() {
    return currentUser;
  };

  return service;
}]);