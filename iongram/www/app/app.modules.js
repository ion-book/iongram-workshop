(function(){
  'use strict';
  angular.module('app', [
    //Core
    'ionic',
    'ngCordova',
    //Widgets
    'app.widgets',
    //Modules
    'app.activity',
    'app.camera',
    'app.home',
    'app.map',
    'app.search',
    'app.tabs',
    'app.user'
  ]);
})();