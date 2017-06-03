const functions = require("../../../functions");

module.exports = {
    command: {
        aliases: [],
        name: "setclothes",
        execute: (player, message, arguments) => {
            if (arguments.length < 2) return player.sendMessage("The usage for that command is (/setClothes [modelname])");

            console.log(player.player.getClothes(parseInt(arguments[1])));

            player.player.setClothes(parseInt(arguments[1]), parseInt(arguments[2]), parseInt(arguments[3]), parseInt(arguments[4]));
        }
    }
};
