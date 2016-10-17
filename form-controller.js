(function() {

  'use strict';

  const app = angular.module('redditCloneApp');

  app.controller('FormController', FormController);

  function FormController($scope, $rootScope) {
    $scope.submitForm = function(isValid) {
      if (!isValid) {
        console.log('invalid');
      }
    }
  }

}());
