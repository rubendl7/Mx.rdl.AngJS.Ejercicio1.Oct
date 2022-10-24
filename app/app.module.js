'use strict';
var rdlApp = angular.module('rubendlApp', ['ngRoute',
                              'servicios',
                              'appBody'
                            ]
);

rdlApp.controller('rubendlController', function ($scope, $timeout)  {
  $scope.miReloj = function(){
      $timeout(function(){
        $scope.reloj = new Date();
        $scope.miReloj();
      },1000);
  };

});


