(function(){
  'use strict';
  angular
    .module('app')
    .config( routeConfig );

  function routeConfig($stateProvider, $urlRouterProvider, $ionicConfigProvider){
    
    $urlRouterProvider.otherwise('/login');
    $ionicConfigProvider.tabs.position('bottom');

    $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'app/user/login.html',
      controller: 'LoginCtrl'
    })
    
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'app/tabs/tabs.html'
    })
    .state('tab.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'app/home/tab-home.html',
          controller: 'TabHomeCtrl'
        }
      }
    }) 
    .state('tab.search', {
      url: '/search',
      views: {
        'tab-search': {
          templateUrl: 'app/search/tab-search.html',
          controller: 'SearchCtrl'
        }
      }
    })
    .state('tab.activity', {
      url: '/activity',
      views: {
        'tab-activity': {
          templateUrl: 'app/activity/tab-activity.html',
          controller: 'TabActivityCtrl'
        }
      }
    })
    .state('tab.profile', {
      url: '/profile',
      views: {
        'tab-profile': {
          templateUrl: 'app/user/tab-profile.html',
          controller: 'TabProfileCtrl'
        }
      }
    })
    .state('map', {
      url: '/map',
      templateUrl: 'app/map/map.html',
      controller: 'MapCtrl'
    })
    
    .state('camera', {
      url: '/camera',
      templateUrl: 'app/camera/camera.html',
      controller: 'CameraCtrl'
    })
    
    .state('filters', {
      url: '/filters/:img',
      templateUrl: 'app/camera/filters.html',
      controller: 'FiltersCtrl'
    })
  
    .state('comments', {
      url: '/comments/:id',
      templateUrl: 'app/home/comments.html',
      controller: 'CommentsCtrl'
    })

  }
})();