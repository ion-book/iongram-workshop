(function(){
  'use strict';
  angular
    .module('app.home')
    .controller('CommentsCtrl', CommentsCtrl);

    function CommentsCtrl($scope, $stateParams){
      var idPost = $stateParams.id;

      $scope.newComment = {};

      $scope.comments = [
        {
          comment: 'Un comentario',
          user: {
            avatar: 'img/mike.png',
            username: 'mike'
          }
        },
        {
          comment: 'Un comentario',
          user: {
            avatar: 'img/max.png',
            username: 'Max'
          }
        }
      ];

      $scope.sendComment = function(){
        $scope.newComment.user = {
          avatar: 'img/Usuario.jpg',
          username: 'Usuario'
        };
        $scope.comments.push( $scope.newComment );
        $scope.newComment = {};
      }

    }
})();