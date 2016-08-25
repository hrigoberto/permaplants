(function() {
  angular.module('permaplants')
         .controller('Auth', Auth);

  Auth.$inject = ['$scope', '$firebaseAuth', '$firebaseArray' ];

  function Auth($scope, $firebaseAuth, $firebaseArray){
    var auth = $firebaseAuth();
    var refUsers = firebase.database().ref('users')
    $scope.users = $firebaseArray(refUsers);
    $scope.Login = googleLogin;
    $scope.createUser = createUser;



    function createUser(){
      $scope.message = null;
      $scope.error = null;
      auth.$createUserWithEmailAndPassword($scope.email, $scope.password)
        .then(function(firebaseUser){
          $scope.users.$add({
            FIRSTNAME: $scope.firstName,
            LASTNAME: $scope.lastName,
            EMAIL: $scope.email,
            PASSWORD: $scope.password,
            uid: firebaseUser.uid,
            rolevalue: 10
          });
        })
        .catch(function(error){
          $scope.error = error;
        });
    }


    function googleLogin(){
      auth.$signInWithPopup('google').then(function(firebaseUser){
        console.log("Signed in as:", firebaseUser);
      }).catch(function(error){
        console.log("Authentication failed:", error);
      });
    };
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.email = "";
    $scope.password = "";
  }
}());
