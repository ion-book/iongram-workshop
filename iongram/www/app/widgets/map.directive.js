(function(){
  'use strict';
  angular
    .module('app.widgets')
    .directive('myMap', myMap);

    function myMap(){
      return {
        restrict: 'E',
        scope: {
          onCreate: '&'
        },
        link: link
      }
      function link($scope, $element, $attr) {
        
        function initialize(){
          var mapOptions = {
            center: new google.maps.LatLng(43.07493, -89.381388),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          var map = new google.maps.Map($element[0], mapOptions);

          $scope.onCreate({map: map});
        }

        if(document.readyState === "complete"){
          initialize();
        }else{
          google.maps.event.addDomListener(window, 'load', initialize);
        }
      }
    }
})();