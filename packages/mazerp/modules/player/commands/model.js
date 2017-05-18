const functions = require("../../../functions");

module.exports = {
    command: {
        aliases: [],
        name: "Model",
        execute: (player, message, arguments) => {
            if (arguments.length < 2) return functions.sendPlayerMessage(player, "The usage for that command is <model name>.");
           
            player.model = mp.joaat(arguments[1]);
        }
    }
};
