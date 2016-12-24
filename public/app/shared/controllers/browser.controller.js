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