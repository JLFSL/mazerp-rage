const functions = require("../../../functions");

module.exports = {
    command: {
        aliases: [],
        name: "setClothes",
        execute: (player, message, arguments) => {
            if (arguments.length < 5) return player.sendMessage("The usage for that command is (/setClothes [component] [drawable] [texture] [palette])");

            player.player.setClothes(parseInt(arguments[1]), parseInt(arguments[2]), parseInt(arguments[3]), parseInt(arguments[4]));
            console.log(JSON.stringify(player.player.getClothes()));
        }
    }
};
