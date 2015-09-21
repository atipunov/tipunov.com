tipunovApp.controller('mainController', ["$scope", "profileService", "notifyingService",
    function ($scope, profileService, notifyingService) {
        var scope = $scope;
        notifyingService.subscribeLocaleChanged($scope, function somethingChanged(event) {
            scope.title = profileService.getHeadTitle();
            scope.locale = profileService.getLocale();
        });
    }]);