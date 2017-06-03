const functions = require("../../../functions");

module.exports = {
    command: {
        aliases: [],
        name: "inventory",
        execute: (player, message) => {
            player.player.call("showInventory",{"weedStacks":{"amount":1}});           
        }
    }
};