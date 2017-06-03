const functions = require("../../../functions");

module.exports = {
    command: {
        aliases: [],
        name: "setface",
        execute: (player, message, arguments) => {
            if (arguments.length < 2) return player.sendMessage("The usage for that command is (/setFace [modelname])");

            console.log(player.setFaceFeature);
            // player.setFaceFeature(arguments[1], arguments[2]);
            // player.setModel(mp.joaat(arguments[1]));
        }
    }
};
