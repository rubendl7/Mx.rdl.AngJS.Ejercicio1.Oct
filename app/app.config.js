'use strict';

angular.
  module('rubendlApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
      when('/cuerpo', {
        template: '<app-body></app-body>'
      }).
      otherwise('/cuerpo');
    }
  ]);
