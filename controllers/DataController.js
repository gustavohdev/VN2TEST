const data = require("../config/database/data.json");

class DataController {
    constructor() {
        if (!data) throw new Error("Data is invalid");
    }

    listCountry() {
        try {
            return console.log(data.length);
        } catch (e) {
            console.log(e);
        }
    }

    mostSpokenLanguageDE() {
        try {
            let mostLanguages = data
                .filter((item) => item.languages.includes("de"))
                .map((item) => item.languages.length)
                .reduce((a, b) => Math.max(a, b));

            let filter = data.filter((item) => {
                return item.languages.length == mostLanguages;
            });

            return console.log(filter[0].country);
        } catch (e) {
            console.log(e);
        }
    }

    countLanguage() {
        try {
            data.map((item) => {
                return console.log(`${item.country} - ${item.languages.length} `);
            });
        } catch (e) {
            console.log(e);
        }
    }

    mostSpokenLanguage() {
        try {
            let mostLanguages = data.map((item) => item.languages.length).reduce((a, b) => Math.max(a, b));
            let filter = data.filter((item) => {
                return item.languages.length == mostLanguages;
            });

            return console.log(filter[0].country);
        } catch (e) {
            console.log(e);
        }
    }

    commonLanguage() {
        try {
            let myLanguages = [];

            for (const item of data) {
                let languages = item.languages;
                for (const lang of languages) {
                    const result = myLanguages.find((i) => i.language === lang);
                    if (!result) myLanguages.push({ language: lang, total: 1 });

                    if (result) {
                        let indexMyLanguages = myLanguages.findIndex((i) => i.language === lang);
                        myLanguages[indexMyLanguages].total += 1;
                    }
                }
            }

            const max = Math.max.apply(
                Math,
                myLanguages.map(function (o) {
                    return o.total;
                })
            );

            let mostCommon = myLanguages
                .filter((item) => {
                    return item.total === 2;
                })
                .map((item) => `${item.language}`);

            return console.log(mostCommon);
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = DataController;
