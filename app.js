(function() {

  'use strict';

  // angular.module('redditCloneApp', []);
  angular.module('redditCloneApp', ['angularMoment']);
  //angular.module('angularMoment', []);

  $('.dropdown-button').dropdown();

  $('select').material_select();

  $(".button-collapse").sideNav();

}());
