const constants = require("../constants"),
      framework = require("../");

const sendGlobalMessage = require("../functions/sendGlobalMessage");

module.exports = {
    events: [
        {
            name: "playerQuit",
            execute: (player) => {
                sendGlobalMessage(`${player.name} has left.`);
            }
        }
    ]
};