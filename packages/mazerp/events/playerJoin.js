const constants = require("../constants"),
      framework = require("../");

const sendGlobalMessage = require("../functions/sendGlobalMessage");

module.exports = {
    events: [
        {
            name: "playerJoin",
            execute: (player) => {
                sendGlobalMessage(`${player.name} has joined the game!`);

                player.model = constants.models[Math.floor(Math.random() * constants.models.length)]
                player.giveWeapon(constants.weapons, 1000);
                player.spawn(constants.spawns[Math.floor(Math.random() * constants.spawns.length)]);
                player.dimension = 1;

                player.vehicle = null;
            }
        }
    ]
};