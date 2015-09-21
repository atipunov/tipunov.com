angular.module('tipunovApp').factory('profileService', ["resources",
    function (resources) {
        var self = this;
        self.innerStorage = {lang: "en"};

        function getProfile() {
            var profile = resources[self.innerStorage.lang];
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
                self.innerStorage.lang = "en";
                return;
            }
            self.innerStorage.lang = lang;
        }

        function getLocale() {
            return self.innerStorage.lang;
        }

        function getHeadTitle() {
            var profile = resources[self.innerStorage.lang];

            return profile.firstName + " " + profile.lastName;
        }


        return {
            getProfile: getProfile,
            setLocale: setLocale,
            getLocale: getLocale,
            getHeadTitle: getHeadTitle,
            lang: self.innerStorage
        };
    }]);