const functions = require("../../../functions");

module.exports = {
    command: {
        aliases: ["showShop"],
        name: "shop",
        execute: (player, message) => {
            player.player.call("shopMenuShow");           
        }
    }
};