(function(){
  'use strict';
  angular
    .module('app.camera')
    .controller('FiltersCtrl', FiltersCtrl);

    function FiltersCtrl($scope, $stateParams){
      
      $scope.cover = {
        img: $stateParams.img,
        filter: ''
      };

      $scope.applyFilter = function( filter ) {
        $scope.cover.filter = filter;
      }

    }
})();