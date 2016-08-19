// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $stateProvider
  .state('login',{
    url: '/login',
    templateUrl: 'templates/login.html'
  }
  )
  .state('tab',{
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  }
  )
  .state('tab.home',{
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html'
      }
    }
  }
  )
  .state('tab.search',{
    url: '/search',
    views:{
      'tab-search': {
        templateUrl: 'templates/tab-search.html'
      }
    }
  })
  .state('tab.activity',{
    url: '/profile',
    views: {
      'tab-profile': {
        templateUrl: 'templates/tab-profile.html'
      }
    }
  }
  )
  .state('map',{
    url: '/map',
    templateUrl: 'templates/map.html'
  })
  .state('camera',{
    url: '/camera',
    templateUrl: 'templates/camera.html'
  })
  .state('filters',{
    url: '/filters',
    templateUrl: 'templates/filters.html'
  })
  .state('comments',{
    url: '/comments/:id',
    templateUrl: 'templates/comments.html'
  });

  $urlRouterProvider.otherwise('/login');
  $ionicConfigProvider.tabs.position('bottom');
  
});
