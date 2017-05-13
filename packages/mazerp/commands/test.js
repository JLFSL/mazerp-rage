const sendPlayerMessage = require("../functions/sendPlayerMessage");

module.exports = {
    "test": (player, text, arguments) => {
        sendPlayerMessage(player, "Test!");
    }
};