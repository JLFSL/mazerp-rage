const functions = require("../../../functions");

module.exports = {
    command: {
        aliases: ["setanim"],
        name: "SetAnimation",
        execute: (player, message, arguments) => {
            if (arguments.length < 3) return player.sendMessage("The usage for that command is (/setanimation [dictionary] [name])");
            player.playAnimation(arguments[1], arguments[2], parseFloat(arguments[3] || 1), parseInt(arguments[4] || 1));
        }
    }
};