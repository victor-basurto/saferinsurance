// AppCtrl
app.controller('AppCtrl', function($rootScope, $scope) {
  $scope.browser = bowser.name;
  $scope.msie = bowser.msie;

  // helper to reload route
  $rootScope.reload = function() {
    $route.reload();
  };

  // helper to go back
  $rootScope.goBack = function() {
    window.history.back();
  };

  // end of AppCtrl
  // console.log('Loaded AppCtrl');
});