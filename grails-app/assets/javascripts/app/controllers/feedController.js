angular.module('app').controller('feedController', function ($resource, $scope) {

  // var User = $resource('/user/:userId', {userId:'@id'});
  var Restaurant = $resource('/api/restaurants/:restaurantId', {restaurantId: '@id'});

  $scope.restaurants = Restaurant.query();
});