(function(){
  'use strict';
  angular
    .module('app.activity')
    .controller('TabActivityCtrl', TabActivityCtrl);

    function TabActivityCtrl($scope){

      $scope.items = [
        {
          activity: 'a iniciado a seguirte.',
          user: {
            avatar: 'img/ben.png',
            username: 'Ben',
            follow: true
          }
        },
        {
          activity: 'a iniciado a seguirte.',
          user: {
            avatar: 'img/mike.png',
            username: 'Mike',
            follow: false
          }
        },
        {
          activity: 'a iniciado a seguirte.',
          user: {
            avatar: 'img/adam.jpg',
            username: 'Adam',
            follow: false
          }
        }
      ];

      $scope.followUser = function( item ){
        item.user.follow = !item.user.follow;
      }

    }
})();