// app.module.js
'use strict';

// package dependencies
const dependencies = [
  'ui.router',
  'ngResource',
  'ngMdIcons',
  'ngAnimate',
  'ngMessages',
  'ngMaterial',
  'angular-loading-bar',
  'angular-clipboard',
  'saferInsuranceApp.directives'
];

// application
const app = angular.module('saferInsuranceApp', dependencies);
const directives = angular.module('saferInsuranceApp.directives', []);