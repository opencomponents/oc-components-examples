(function(angular) {
  'use strict';
  
  var myApp = angular.module('myComponentApp', []);

  myApp.controller('GreetingController', ['$scope', function($scope) {
    $scope.greeting = 'Hello';
  }]);

})(window.angular);