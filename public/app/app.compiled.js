// example
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
// example
// example
// WelcomeCtrl
app.controller('WelcomeCtrl', function($scope) {
  $scope.page = 'welcome';

  // end of WelcomeCtrl
  // console.log('Loaded WelcomeCtrl');
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