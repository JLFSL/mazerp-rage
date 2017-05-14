const framework = require("../");

module.exports = {
    commands: [
        {
            aliases: ["commands"],
            arguments: [],
            command: "help",
            execute: (player, message, arguments) => {
                console.log("helpasd");
            },
            name: "Help"
        }
    ]
};