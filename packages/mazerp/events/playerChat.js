const constants = require("../constants"),
	  striptags = require("striptags");

const sendGlobalMessage = require("../functions/sendGlobalMessage");

module.exports = {
	"playerChat": (player, text) => {
		sendGlobalMessage(`<b>${player.name}</b>: ${striptags(text)}`);
	}
};