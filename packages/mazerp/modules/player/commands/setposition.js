const functions = require("../../../functions");

module.exports = {
    command: {
        aliases: ["setpos"],
        name: "SetPosition",
        execute: (player, message, arguments) => {
            if (arguments.length < 4) return player.sendMessage("The usage for that command is (/setposition [x] [y] [z])");

            player.setPosition(parseFloat(arguments[1]), parseFloat(arguments[2]), parseFloat(arguments[3]));
        }
    }
};