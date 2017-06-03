const functions = require("../../../functions");

module.exports = {
    command: {
        aliases: [],
        name: "SetModel",
        execute: (player, message, arguments) => {
            if (arguments.length < 2) return player.sendMessage("The usage for that command is (/model [modelname])");
            player.setModel(mp.joaat(arguments[1]));
        }
    }
};
