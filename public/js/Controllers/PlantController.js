(function() {
  angular.module('permaplants')
         .controller('PlantController', PlantController);

  PlantController.$inject = ['$scope', '$firebaseArray'];

  function PlantController($scope, $firebaseArray){
    var ref = firebase.database().ref('plantlist')

    $scope.plants = $firebaseArray(ref);
  }
}());
