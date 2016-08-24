(function() {
  angular.module('permaplants')
         .controller('Auth', Auth);

  Auth.$inject = ['$scope', '$firebaseAuth'];

  function Auth($scope, $firebaseAuth){
    var auth = $firebaseAuth();
    $scope.Login = googleLogin;

    function googleLogin(){
      auth.$signInWithPopup('google').then(function(firebaseUser){
        console.log("Signed in as:", firebaseUser);
      }).catch(function(error){
        console.log("Authentication failed:", error);
      });
    };
  }
}());
