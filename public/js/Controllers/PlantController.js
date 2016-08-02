(function() {
  angular.module('permaplants')
         .controller('PlantController', PlantController);

  PlantController.$inject = ['$scope', '$firebaseArray'];

  function PlantController($scope, $firebaseArray){
    var ref = firebase.database().ref('plantlist')
    $scope.addPlants = addPlants;
    $scope.plants = $firebaseArray(ref);

    function addPlants(){
      $scope.plants.$add({
        COMMON: $scope.common,
        LAYERTYPE: $scope.layertype,
        SCIENTIFIC: $scope.scientific,
        USE: $scope.use
      });

    $scope.common = "";
    $scope.layertype = "";
    $scope.scientific = "";
    $scope.use = "";

    }
  }
}());
