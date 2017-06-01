const framework = require("../../../"),
      logger = framework.logger;

module.exports = {
    event: {
        name: "playerCommand",
        execute: (player, message) => {
            var arguments = message.split(" "),
                command = arguments[0].toLowerCase();

            framework.commands.filter(c => {
                if (command == c.name.toLowerCase() || c.aliases.indexOf(command) > -1) {
                    logger.log("debug", `${player.name} used command ${command}.`);
                    return c.execute(player, message, arguments);
                }
            });
        }
    }
};