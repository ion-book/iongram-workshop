(function(){
  'use strict';
  angular
    .module('app.home')
    .controller('TabHomeCtrl', TabHomeCtrl);

    function TabHomeCtrl($scope, $state, $ionicActionSheet){
      
      $scope.posts = [
        {
          id: 1,
          photo: 'img/img1.jpg',
          like: true,
          text: 'Museo al aire libre en san miguel!',
          user: {
            avatar: 'img/Usuario.jpg',
            username: 'Usuario'
          }
        },
        {
          id: 2,
          photo: 'img/img2.jpg',
          like: false,
          text: 'Otra foto más',
          user: {
            avatar: 'img/Usuario.jpg',
            username: 'Usuario'
          }
        }
      ];

      $scope.showOptions = function( post ) {
        $ionicActionSheet.show({
          buttons: [
            { text: '<b>Share</b> This' }
          ],
          destructiveText: 'Delete',
          titleText: 'Modify your album',
          cancelText: 'Cancel'
        });
      }

      $scope.likePhoto = function( post ) {
        post.like = !post.like;
      }

      $scope.goToComments = function( post ) {
        $state.go('comments', {
          id: post.id
        });
      }
    }
})();