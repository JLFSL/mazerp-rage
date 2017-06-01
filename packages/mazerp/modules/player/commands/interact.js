const functions = require("../../../functions");

module.exports = {
    command: {
        aliases: ["act"],
        name: "interact",
        execute: (player, message) => {
            player.player.call("interactionMenuShow");           
        }
    }
};