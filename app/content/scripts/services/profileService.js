tipunovApp.factory('profileService', ["resources", function (resources) {
    function getProfile(lang) {
        if (!lang) {
            lang = "en";
        }
        var profile = resources[lang];
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

    return {getProfile: getProfile};
}]);