// app.config
app.config(function(
  $stateProvider,
  $urlRouterProvider,
  $locationProvider,
  $httpProvider
) {
  // interceptor for AJAX errors
  $httpProvider.interceptors.push(function($q, $location) {
    return {
      response: function(response) {
        return response;
      },
      responseError: function(response) {
        if (response.status === 401)
          $location.url('/');
        return $q.reject(response);
      }
    };
  });

  // angular 404 redirect
  $urlRouterProvider.otherwise('/');

  // application routing
  $stateProvider
    // welcome route
    .state('welcome', {
      url: '/',
      templateUrl: 'app/components/welcome/welcome.html',
      controller: 'WelcomeCtrl'
    })
    // style guide route
    .state('style-guide', {
      url: '/style-guide',
      templateUrl: 'app/components/style-guide/style-guide.html',
      controller: 'StyleGuideCtrl'
    });

  // end of app.config
  // console.log('app.config executed');
});