const functions = require("../../../functions");
const itemInfo = require("../../../itemInfo");

module.exports = {
    command: {
        aliases: [],
        name: "inventory",
        execute: (player, message) => {
            console.log(JSON.stringify(player.inventory));
            player.player.call("showInventory",JSON.stringify(player.inventory), JSON.stringify(itemInfo));           
        }
    }
};