angular.module('tipunovApp').controller('mainController', ["$scope", "profileService",
    function ($scope, profileService) {
        var scope = $scope;
        $scope.locale = profileService.lang;
        $scope.$watch(function () {
            return profileService.getHeadTitle();
        }, function (newVal, oldVal) {
            scope.title = newVal;
        });
    }]);