(function() {
  angular.module('permaplants')
         .controller('Auth', Auth);

  Auth.$inject = ['$scope', '$firebaseAuth'];

  function Auth($scope, $firebaseAuth){
    var auth = $firebaseAuth();

    function googleLogin(){
      auth.$signInWithPopup('facebook').then(function(firebaseUser){
        console.log("Signed in as:", firebaseUser.uid);
      }).catch(function(error){
        console.log("Authentication failed:", error);
      });
    };
  }
}());
