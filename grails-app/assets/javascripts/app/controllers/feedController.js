angular.module('app').controller('feedController', function ($resource, $scope, securityService) {

  var token = securityService.currentUser().token;
  var Restaurant = $resource('/api/restaurants');

  $scope.restaurants = Restaurant.query({headers: {'X-Auth-Token': token}});
});