const functions = require("../../../functions");

module.exports = {
    command: {
        aliases: ["pos"],
        name: "Pos",
        execute: (player, message) => {
            player.sendMessage("X: " + player.position.x + ", Y: " + player.position.y + ", Z: " + player.position.z);
        }
    }
};