const constants = require("../constants");

const sendGlobalMessage = require("../functions/sendGlobalMessage");

module.exports = {
	"playerQuit": (player) => {
		sendPlayerMessage(player, "Welcome to the MazeRP Development Server!");
		sendGlobalMessage(`${player.name} has left.`);
	}
};