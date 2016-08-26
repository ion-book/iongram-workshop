(function(){
  'use strict';
  angular
    .module('app.user')
    .controller('LoginCtrl', LoginCtrl);

    function LoginCtrl($scope, $state, $ionicPopup){
      
      $scope.user = {};

      $scope.doLogin = function(){
        if($scope.user.username == "user" && $scope.user.password == "user"){
          $state.go('tab.home');
        }else{
          $ionicPopup.alert({
            title: 'Ocurrio un error',
            template: '<p class="text-center">Vuelva a intentarlo</p>',
            okType: 'button-assertive'
          });
          $scope.user.password = '';
        }
      }
    }
})();