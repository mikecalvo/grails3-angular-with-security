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
    var loginPayload = {username: username, password: password};
    return $http.post('/api/login', loginPayload).then(loginSuccess, loginFailure);
  };
  
  service.currentUser = function() {
    return currentUser;
  };

  return service;
}]);