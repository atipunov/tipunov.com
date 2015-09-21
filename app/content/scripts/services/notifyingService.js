tipunovApp.factory('notifyingService', ["$rootScope", function($rootScope) {
    return {
        subscribeLocaleChanged: function(scope, callback) {
            var handler = $rootScope.$on('localeChangedEvent', callback);
            scope.$on('$destroy', handler);
        },

        notify: function() {
            $rootScope.$emit('localeChangedEvent');
        }
    };
}]);