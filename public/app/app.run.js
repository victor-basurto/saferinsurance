// app.run execution
app.run(function($rootScope, $state, $location, $anchorScroll){
  checkBrowserSupport();

  //when the state is changed scroll to the proper element.
  $rootScope.$on('$stateChangeSuccess', function(newRoute, oldRoute) {
    if($location.hash()) $anchorScroll();
  });

  // helper to check browser support
  function checkBrowserSupport() {
    // browser detection
    console.log('The browser is ' + bowser.name + ' ' + bowser.version);
    $rootScope.icBrowser = false;

    // check browser support
    if (bowser.msie) {
      $rootScope.icBrowser = true;
    };
  }

  // end of run
  // console.log('app.run executed');
});
