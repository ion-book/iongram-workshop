(function(){
  'use strict';
  angular
    .module('app.map')
    .controller('MapCtrl', MapCtrl);

    function MapCtrl($scope){
      
      $scope.map = null;
      $scope.photos = [
        {
          name: 'foto 1',
          img: 'img/img1_icon.jpg',
          lat: 43.07403,
          lng: -89.381388
        },
        {
          name: 'foto 2',
          img: 'img/img2_icon.jpg',
          lat: 43.07303,
          lng: -89.381088
        }
      ];

      $scope.mapCreated = function(map){
        $scope.map = map;
        $scope.photos.forEach(function(photo) {
          createMarker(photo);
        });
      }

      function createMarker(photo){
        return new google.maps.Marker({
          position: {lat: photo.lat, lng: photo.lng},
          map: $scope.map,
          title: photo.name,
          icon: photo.img
        });
      }
    }
})();