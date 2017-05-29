const functions = require("../../../functions");

module.exports = {
    command: {
        aliases: ["setMoneyz"],
        name: "setWallet",
        execute: (player, message, arguments) => {
            if (arguments.length < 1) return player.sendMessage("The usage for that command is (/setWallet [amount])");

            player.player.iCash = arguments[1];
        }
    }
};