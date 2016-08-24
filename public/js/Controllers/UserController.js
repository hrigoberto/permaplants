(function() {
  angular.module('permaplants')
         .controller('Auth', Auth);

  Auth.$inject = ['$scope', '$firebaseAuth' ];

  function Auth($scope, $firebaseAuth){
    var auth = $firebaseAuth();
    // var refUsers = firebase.database().ref('users')
    // $scope.users = $firebase(refUsers);
    $scope.Login = googleLogin;
    $scope.createUser = createUser;



    function createUser(){
      $scope.message = null;
      $scope.error = null;
      // $scope.users.$add({
      //
      // })
      auth.$createUserWithEmailAndPassword($scope.email, $scope.password)
        .then(function(firebaseUser){
          $scope.message = "User Created with uid:" + firebaseUser.uid;
        })
        .catch(function(error){
          $scope.error = error;
        })
    }
    function googleLogin(){
      auth.$signInWithPopup('google').then(function(firebaseUser){
        console.log("Signed in as:", firebaseUser);
      }).catch(function(error){
        console.log("Authentication failed:", error);
      });
    };
  }
}());
