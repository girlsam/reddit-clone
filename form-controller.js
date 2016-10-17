(function() {

  'use strict';

  const app = angular.module('redditCloneApp');

  app.controller('FormController', FormController);

  function FormController($scope, $rootScope) {
    $scope.submitForm = function(isValid) {
      $rootScope.postsArray.push({
        title: this.title,
        description: this.description;
        author: this.author,
        image: this.image,
        date: new Date(),
        comments: []
      });
    }
  }

}());
