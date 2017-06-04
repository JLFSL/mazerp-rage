const functions = require("../../../functions");
const itemInfo = require("../../../itemInfo");

module.exports = {
    command: {
        aliases: ["inv"],
        name: "Inventory",
        execute: (player, message) => {
            console.log(JSON.stringify(player.aInventory));
            player.player.call("showInventory",JSON.stringify(player.aInventory), JSON.stringify(itemInfo));           
        }
    }
};