var tipunovApp = angular.module('tipunovApp', ["ngRoute"]);

tipunovApp.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/:lang', {
            controller: 'dashboardController',
            templateUrl: "/main.html"
        })
        .otherwise({redirectTo: "/en"});
}]);