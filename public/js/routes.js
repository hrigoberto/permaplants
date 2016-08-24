(function() {
  angular.module('permaplants')
         .config(RouteConfig);

  RouteConfig.$inject = ['$routeProvider', '$locationProvider'];

  function RouteConfig($routeProvider, $locationProvider){
    $routeProvider
    .when('/', {
      templateUrl: "/html/views/list.html"
    })
    .when('/signup', {
      templateUrl: "html/views/signup.html"
    })
    .otherwise({
      redirectTo: '/'
    })
  }
}());
