angular.module('tipunovApp').constant("resources", {
    en: {
        firstName: "Anton",
        lastName: "Tipunov",
        email: {
            label: "E-mail",
            value: "anton@tipunov.com"
        },
        location: {
            label: "Location",
            value: {
                locality: "Minsk",
                country: "Belarus"
            }
        },
        phone: {
            label: "Phone",
            value: "+375 25 9419001"
        }
    },
    ru: {
        firstName: "Антон",
        lastName: "Типунов",
        email: {
            label: "Эл. почта",
            value: "anton@tipunov.com"
        },
        location: {
            label: "Расположение",
            value: {
                locality: "Минск",
                country: "Беларусь"
            }
        },
        phone: {
            label: "Телефон",
            value: "+375 25 9419001"
        }
    }
});