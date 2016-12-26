// example
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
// IcBrowserCtrl
app.controller('IcBrowserCtrl', function($scope) {
  // browser incompatibiity page assets
  const imgRefBase = '/assets/img/other/browsers/'

  $scope.browsers = [
    {
      name: 'chrome',
      href: '//www.google.com/chrome'
    },
    {
      name: 'firefox',
      href: '//www.mozilla.org/firefox'
    },
    {
      name: 'edge',
      href: '//www.microsoft.com/en-us/windows/microsoft-edge'
    },
    {
      name: 'opera',
      href: '//www.opera.com/'
    },
    {
      name: 'safari',
      href: '//support.apple.com/downloads/#safari'
    }
  ];

  // end of IcBrowserCtrl
  // console.log('Loaded IcBrowserCtrl');
});
// md-image direction
directives.directive('mdImage',function() {
    return {
      restrict: 'E',
      template: '<div class="md-image" ng-transclude></div>',
      transclude: true,
      replace: true
    };
  });
// example
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
// StyleGuideCtrl
app.controller('StyleGuideCtrl', function($scope) {
  // array of logo refs
  $scope.logos = [
    '/assets/img/core/logo/main.png',
    '/assets/img/core/logo/dark.png',
    '/assets/img/core/logo/small/main.png',
    '/assets/img/core/logo/small/dark.png',
    '/assets/img/core/fav/310/main.png',
    '/assets/img/core/fav/32/main.png'
  ];

  // end of StyleGuideCtrl
  // console.log('Loaded StyleGuideCtrl');
});
// WelcomeCtrl
app.controller('WelcomeCtrl', function($scope) {
  $scope.page = 'welcome';

  // end of WelcomeCtrl
  // console.log('Loaded WelcomeCtrl');
});