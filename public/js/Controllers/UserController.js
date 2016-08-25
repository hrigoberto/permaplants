(function() {
  angular.module('permaplants')
         .controller('Auth', Auth);

  Auth.$inject = ['$scope', '$firebaseAuth', '$firebaseObject' ];

  function Auth($scope, $firebaseAuth, $firebaseObject){
    var auth = $firebaseAuth();
    var refUsers = firebase.database().ref('users')
    $scope.users = $firebaseObject(refUsers);
    $scope.login = login;
    $scope.createUser = createUser;
    $scope.logout = logout;




    function createUser(){
      $scope.message = null;
      $scope.error = null;
      auth.$createUserWithEmailAndPassword($scope.email, $scope.password)
        .then(function(firebaseUser){
          refUsers.child(firebaseUser.uid).set({
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

    function login(email, password){
      auth.$signInWithEmailAndPassword(email, password)
          .catch(function(error){
            console.log("Authentication failed:", error);
          });
          $scope.email = "";
          $scope.password = "";
    };



    function logout(){
      auth.$signOut();
    };

    auth.$onAuthStateChanged(function(firebaseUser){
      if(firebaseUser){
        $scope.firebaseUser = firebaseUser;
        console.log(firebaseUser);
      } else {
        $scope.firebaseUser = "";
        console.log("signed out");
      }
      $scope.firstName = "";
      $scope.lastName = "";
      $scope.email = "";
      $scope.password = "";
    });

    function googleLogin(){
      auth.$signInWithPopup('google')
          .then(function(firebaseUser){
            console.log("Signed in as:", firebaseUser);
          })
          .catch(function(error){
            console.log("Authentication failed:", error);
          });
    };
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.email = "";
    $scope.password = "";
  }
}());
