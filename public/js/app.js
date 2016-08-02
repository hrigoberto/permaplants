var config = {
    apiKey: "AIzaSyAAkobkk-cX0wHyMZ-o0foD5S80FL-y2AM",
    authDomain: "northflplants.firebaseapp.com",
    databaseURL: "https://northflplants.firebaseio.com",
    storageBucket: "northflplants.appspot.com",
  };
  firebase.initializeApp(config);

angular.module('permaplants',[
  'firebase'
]);
