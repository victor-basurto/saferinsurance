// HeaderCtrl
app.controller('HeaderCtrl', function($scope, $http) {
  // retrieve main-nav data
  $http.get('/api/main-nav.json')
    .success(function(mainNav){
      $scope.mainNav = mainNav;
    });

  // end of HeaderCtrl
  // console.log('Loaded HeaderCtrl');
})
.controller('MainNavCtrl', function($rootScope, $scope) {
  $rootScope.navIsOpen = false;

  // end of MainNavCtrl
  // console.log('Loaded MainNavCtrl');
})
.controller('NavSectionCtrl', function($rootScope, $scope) {
  $scope.showSection = false;

  $scope.initNavSection = function(navSection) {
    $scope.section = navSection;
  };

  $scope.showNavSection = function() {
    $rootScope.navIsOpen = true;
    $scope.showSection = true;
  };

  $scope.hideNavSection = function() {
    $scope.showSection = false;
  };

  $scope.enterNavSection = function() {
    $scope.showNavSection();
    $('.main-nav section.' + $scope.section)
      .css('background-color', '#f1f1f1');
  };

  $scope.leaveNavSection = function() {
    $scope.hideNavSection();
    $('.main-nav section.' + $scope.section)
      .css('background-color', 'transparent');
  };

  // end of NavSectionCtrl
  // console.log('Loaded NavSectionCtrl');
});