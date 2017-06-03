const functions = require("../../../functions");

module.exports = {
    command: {
        aliases: [],
        name: "setModel",
        execute: (player, message, arguments) => {
            if (arguments.length < 2) return player.sendMessage("The usage for that command is (/setmodel [modelname])");
            player.setModel(mp.joaat(arguments[1]));
        }
    }
};
