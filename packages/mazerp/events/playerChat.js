const constants = require("../constants"),
      framework = require("../"),
	  striptags = require("striptags");

const sendGlobalMessage = require("../functions/sendGlobalMessage");

module.exports = {
    events: [
        {
            name: "playerChat",
            execute: (player, message) => {
                sendGlobalMessage(`<b>${player.name}</b>: ${striptags(message)}`);
            }
        }
    ]
};