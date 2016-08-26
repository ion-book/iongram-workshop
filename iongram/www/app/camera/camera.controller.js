(function(){
  'use strict';
  angular
    .module('app.camera')
    .controller('CameraCtrl', CameraCtrl);

    function CameraCtrl($scope, $state, $cordovaCamera){
      
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

      $scope.photoSelected = $scope.photos[0];

      $scope.changePhoto = function( photo ){
        $scope.photoSelected = photo;
      }

      $scope.goToFilters = function() {
        $state.go('filters', {
          'img': $scope.photoSelected.img
        })
      }

      $scope.takePicture = function () {

        var options = {
          quality: 100,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
          allowEdit: false,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 500,
          targetHeight: 500,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false,
          correctOrientation:true
        }

        $cordovaCamera.getPicture( options )
        .then(function( imageData ) {
          var newPhoto = {
            name: 'name',
            img:  "data:image/jpeg;base64," + imageData
          };
          $scope.photos.unshift( newPhoto );
        });
      }

    }
})();