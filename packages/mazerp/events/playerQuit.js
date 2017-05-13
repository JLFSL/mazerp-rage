const constants = require("../constants");

const sendGlobalMessage = require("../functions/sendGlobalMessage");

module.exports = {
	"playerQuit": (player) => {
		sendGlobalMessage(`${player.name} has left.`);
	}
};