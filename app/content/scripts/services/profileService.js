angular.module('tipunovApp').factory('profileService', ["resources", "notifyingService",
    function (resources, notifyingService) {
        var self = this;
        self.lang = "en";

        function getProfile() {
            var profile = resources[self.lang];
            profile.social = [
                {
                    className: "github",
                    url: "https://github.com/atipunov",
                    label: "GitHub",
                    login: "atipunov"
                },
                {
                    className: "linkedin",
                    url: "https://www.linkedin.com/in/atipunov",
                    label: "LinkedIn",
                    login: "atipunov"
                },
                {
                    className: "vk",
                    url: "https://vk.com/tipunov1",
                    label: "VK",
                    login: "tipunov1"
                }
            ];
            return profile;
        };


        function setLocale(lang) {
            if (!lang || !resources[lang]) {
                self.lang = "en";
                return;
            }
            self.lang = lang;
            notifyingService.notify();
        }

        function getLocale() {
            return self.lang;
        }

        function getHeadTitle() {
            var profile = resources[self.lang];

            return profile.firstName + " " + profile.lastName;
        }


        return {
            getProfile: getProfile,
            setLocale: setLocale,
            getLocale: getLocale,
            getHeadTitle: getHeadTitle
        };
    }]);