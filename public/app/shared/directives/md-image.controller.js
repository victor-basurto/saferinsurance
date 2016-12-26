// md-image direction
directives.directive('mdImage',function() {
    return {
      restrict: 'E',
      template: '<div class="md-image" ng-transclude></div>',
      transclude: true,
      replace: true
    };
  });