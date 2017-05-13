const constants = require("../constants");

const sendPlayerMessage = require("../functions/sendPlayerMessage");

module.exports = {
	"playerSpawn": (player) => {
		sendPlayerMessage(player, "Welcome to the MazeRP Development Server!");
	}
};