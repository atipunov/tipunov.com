angular.module('tipunovApp', ["ngRoute"])
    .config(["$routeProvider", "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/:lang', {
                    controller: 'dashboardController',
                    templateUrl: "/main.html"
                })
                .otherwise({redirectTo: "/en"});
        }]);