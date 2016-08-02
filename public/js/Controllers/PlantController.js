(function() {
  angular.module('permaplants')
         .controller('PlantController', PlantController);

  PlantController.$inject = ['$scope', '$firebaseArray'];

  function PlantController($scope, $firebaseArray){
    var ref = firebase.database().ref('plantlist')
    $scope.plants = $firebaseArray(ref);
    $scope.addPlants = addPlants;
    $scope.edit = editPlant;
    $scope.update = updatePlant;
    $scope.cancel = cancelUpdate;



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

    function cancelUpdate(plant){
      $scope.plants = $firebaseArray(ref);
      plant.editing = false;
    }

    function updatePlant(plant){
      plant.editing = false;
      $scope.plants.$save(plant);
    }

    function editPlant(plant){
      plant.editing = true;
    }

  }
}());
