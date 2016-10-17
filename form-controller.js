(function() {

  'use strict';

  const app = angular.module('redditCloneApp');

  app.controller('FormController', FormController);

  function FormController($rootScope) {
    this.addPost = function() {
      $rootScope.postsArray.push({
        title: this.newPostForm.title,
        author: this.newPostForm.author,
        content: this.newPostForm.content,
        image: this.newPostForm.image,
        date: new Date(),
        voteCount: 0,
        comments: []
      });
      this.newPostForm = initForm();
    }

    function initForm() {
      return {
        title: '',
        author: '',
        content: '',
        image: '',
        date: '',
        voteCount: 0,
        comments: []
      }
    }
  }

}());
