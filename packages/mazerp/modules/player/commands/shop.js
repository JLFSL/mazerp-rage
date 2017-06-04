const functions = require("../../../functions");

module.exports = {
    command: {
        aliases: ["showShop"],
        name: "Shop",
        execute: (player, message) => {
            player.player.call("shopMenuShow");           
        }
    }
};