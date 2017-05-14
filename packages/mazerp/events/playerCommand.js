const framework = require("../");

const sendPlayerMessage = require("../functions/sendPlayerMessage");

module.exports = {
    events: [
        {
            name: "playerCommand",
            execute: (player, message) => {
                var arguments = message.split(" "),
                    command = arguments[0].toLowerCase();
                
                framework.commands.filter(c => {
                    if (c.command.toLowerCase() == command || c.aliases.indexOf(command.toLowerCase()) > -1) return c.execute(player, message, arguments);
                });
            }
        }
    ]
};