tipunovApp.controller('dashboardController', ["$scope", "profileService", "$routeParams", function ($scope, profileService, $routeParams) {
    profileService.setLocale($routeParams.lang);
    var profile = profileService.getProfile();
    $scope.profile = profile;
    $scope.page.setTitle(profile.firstName + " " + profile.lastName);
    $scope.locale = profileService.getLocale();
}]);

tipunovApp.run(['$rootScope', function ($rootScope) {
    $rootScope.page = {
        setTitle: function (title) {
            this.title = title;
        }
    }
    $rootScope.$on('$routeChangeSuccess', function (event, current) {
        $rootScope.page.setTitle(current.$$route.title);
    });
}]);