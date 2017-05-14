const framework = require("../");

module.exports = {
    commands: [
        {
            aliases: [],
            arguments: [],
            command: "vehicle",
            execute: (player, message, arguments) => {
                console.log(message);
            },
            name: "Vehicle"
        }
    ]
};