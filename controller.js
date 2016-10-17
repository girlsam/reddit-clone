(function() {

  'use strict';

  const app = angular.module('redditCloneApp');

  app.controller(function(amMoment) {
    amMoment.changeLocale('de');
  });

  app.controller('PostContentController', PostContentController);

  function PostContentController($scope, $rootScope) {
    //default sort by title
    $rootScope.sortPosts = '-voteCount';

    //data array
    $rootScope.postsArray = [{
      title: 'The Big House',
      author: 'Bo Schembechler',
      image: 'http://grfx.cstv.com/photos/schools/mich/sports/genrel/auto_responsive_bsi/11236115.jpeg',
      date: '2016-09-01 21:40:23',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      voteCount: 4,
      comments: [{
        username: 'Jim Harbaugh',
        comment: 'Obviously.'
      },
      {
        username: 'Urban Meyer',
        comment: 'This place makes me want to cry.'
      }]
      }, {
        title: 'Ohio Stadium',
        author: 'Woody Hayes',
        image: 'https://news.osu.edu/assets/stadium_3_osu_library.jpg',
        date: '2016-09-10 19:30:23',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        voteCount: -10,
        comments: [{
          username: 'Jim Harbaugh',
          comment: 'Looks like a toilet bowl. Call me when it can hold another 10,000 people.'
        },
        {
          username: 'Urban Meyer',
          comment: '<3'
        }]
      }, {
        title: 'McLane Stadium',
        author: 'Robert Griffin III',
        image: 'https://s-media-cache-ak0.pinimg.com/originals/ac/2b/1a/ac2b1a0155bbd0b3ae66d2fcf67ca159.jpg',
        date: '2016-08-15 11:10:23',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        voteCount: 2,
        comments: [{
          username: 'Cam Newton',
          comment: 'Ha.'
        },
        {
          username: 'RGIII',
          comment: 'I miss this place.'
        }]
      }, {
        title: 'Bryant-Denny Stadium',
        author: 'Nick Saban',
        image: 'http://a.espncdn.com/photo/2013/1126/ncf_ironbowl_ms_07.jpg',
        date: '2016-10-10 21:40:23',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        voteCount: 0,
        comments: [{
          username: 'Urban Meyer',
          comment: 'We\'d beat you here, obviously.'
        },
        {
          username: 'Les Miles',
          comment: 'Someone tell me I\'m still relevant.'
        }, {
          username: 'Jim Harbaugh',
          comment: 'Go home, Meyer, you\'re drunk.'
        }]
      }]

  }

}());
