(function() {

  'use strict';

  const app = angular.module('redditCloneApp');

  app.controller('CommentController', CommentController);

  function CommentController($scope, $rootScope) {

    this.upVote = function(item) {
      item.voteCount++;
      return item.voteCount;
    }

    this.downVote = function(item) {
      item.voteCount --;
      return item.voteCount;
    }

  }

}());
