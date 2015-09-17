tipunovApp.controller('dashboardController', ["$scope", "profileService", function ($scope, profileService) {
    $scope.en = function () {
        $scope.profile = profileService.getProfile("en");
        $scope.locale = "en";
    }
    $scope.ru = function () {
        $scope.profile = profileService.getProfile("ru");
        $scope.locale = "ru";
    }
    $scope.locale = "en";
    $scope.profile = profileService.getProfile($scope.locale);
}]);