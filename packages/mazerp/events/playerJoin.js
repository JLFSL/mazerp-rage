const constants = require("../constants");

const sendGlobalMessage = require("../functions/sendGlobalMessage"),
	  sendPlayerMessage = require("../functions/sendPlayerMessage");

module.exports = {
	"playerJoin": (player) => {
		player.model = constants.models[Math.floor(Math.random() * constants.models.length)]
		player.giveWeapon(constants.weapons, 1000);
		player.spawn(constants.spawns[Math.floor(Math.random() * constants.spawns.length)]);
		player.dimension = 1;

		player.currentVehicle = null;
		player.lastVehicle = null;

		sendPlayerMessage(player, "Welcome to the MazeRP Development Server!");
		sendGlobalMessage(`${player.name} has joined!`);
	}
};