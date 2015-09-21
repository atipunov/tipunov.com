tipunovApp.controller('dashboardController', ["$scope", "profileService", "$routeParams",
    function ($scope, profileService, $routeParams) {
        profileService.setLocale($routeParams.lang);
        $scope.profile = profileService.getProfile();
    }]);