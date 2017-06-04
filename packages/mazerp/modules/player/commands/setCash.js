const functions = require("../../../functions");

module.exports = {
    command: {
        aliases: [],
        name: "setCash",
        execute: (player, message, arguments) => {
            if (arguments.length < 1) return player.sendMessage("The usage for that command is (/setCash [amount])");

            player.player.iCash = arguments[1];
        }
    }
};