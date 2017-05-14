const constants = require("../constants"),
      framework = require("../");

const sendPlayerMessage = require("../functions/sendPlayerMessage");

module.exports = {
    events: [
        {
            name: "playerJoin",
            execute: (player) => {
                sendPlayerMessage(player, `Welcome to the MazeRP Development Server!`);

                player.model = constants.models[Math.floor(Math.random() * constants.models.length)]
                player.spawn(constants.spawns[Math.floor(Math.random() * constants.spawns.length)]);
                player.dimension = 1;

                player.vehicle = null;
            }
        }
    ]
};