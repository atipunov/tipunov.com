angular.module('tipunovApp').directive('social',
    function () {
        return {
            restrict: 'AE',
            replace: 'true',
            template: '<li class="piece {{social.className}}">\
                        <a class="link" href="{{social.url}}" rel="me">\
                            <div class="icon"></div>\
                            <span class="service">{{social.label}}</span><span class="dash">/</span>\
                            <span class="login">{{social.login}}</span>\
                        </a>\
                    </li>'
        };
    });
