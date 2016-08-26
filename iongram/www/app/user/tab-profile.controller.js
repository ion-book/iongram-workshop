(function(){
  'use strict';
  angular
    .module('app.user')
    .controller('TabProfileCtrl', TabProfileCtrl);

    function TabProfileCtrl($scope, $state){
      
      $scope.mode = {
        grid: true
      };

      $scope.photos = [
        { name: 'foto 1', img: 'img/img1.jpg' },
        { name: 'foto 2', img: 'img/img2.jpg' },
        { name: 'foto 3', img: 'img/img3.jpg' },
        { name: 'foto 4', img: 'img/img4.jpg' },
        { name: 'photo 5', img: 'img/img5.jpg' },
        { name: 'photo 6', img: 'img/img6.jpg' },
        { name: 'photo 7', img: 'img/img7.jpg' },
        { name: 'photo 8', img: 'img/img8.jpg' },
        { name: 'photo 9', img: 'img/img9.jpg' }
      ];

      $scope.changeMode = function( mode ) {
        $scope.mode.grid = mode;
      }

      $scope.goToMapPage = function() {
        $state.go('map');
      }

    }
})();