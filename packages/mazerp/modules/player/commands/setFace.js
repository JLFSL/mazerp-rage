const functions = require("../../../functions");

module.exports = {
    command: {
        aliases: [],
        name: "setFace",
        execute: (player, message, arguments) => {
            if (arguments.length < 3) return player.sendMessage("The usage for that command is (/setFace [index] [scale])");

            player.setFaceFeature(arguments[1], arguments[2]);
            console.log(JSON.stringify(player.getFaceFeature()));
        }
    }
};
