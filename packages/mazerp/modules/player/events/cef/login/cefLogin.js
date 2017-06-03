const framework = require("../../../../../"),
      functions = require("../../../../../functions"),
      logger = framework.logger;

const superagent = require("superagent");

module.exports = {
    event: {
        name: "cefLogin",
        execute: (player, result) => {
            const parseData = JSON.parse(result);
            logger.log("debug", `cefLogin(${player.name}): ${parseData.email}, ${parseData.password}.`);

            if (player.logged_in)
                return player.sendMessage("SERVER: You are already logged in.");

            superagent
                .post("https://ucp.mazerp.com/api/auth/user")
                .send({ email: parseData.email })
                .send({ password: parseData.password })
                .then((result) => {
                    if (result.body.status !== 'success') return player.player.call('loginResponse', false, 'Invalid Login');

                    player.setName(result.body.user);
                    player.select()
                        .then((result) => {
                            if (!result) {

                                // Player is new - Get the charCreation Spot
                                var pos = variables.charCreation;

                                player.insert({ username: player.name, position_x: pos.position.x, position_y: pos.position.y, position_z: pos.position.z, heading: pos.heading })
                                    .then((result) => {

                                    	// Player inserted into the DB - Begin Char Customization
                                    	framework.emit("playerCharCreation", player, result);

                                        // framework.emit("playerLogin", player, result);
                                    })
                                    .catch((err) => {

                                        // TODO: Maybe implement a MySQL Logging solution that creates a Unique ID here, then tells them to go to staff with "Game Error: XXX"
                                        player.player.call('loginResponse', false, 'Create DBChar Failed - Report to Staff');

                                        // player.sendMessage("SERVER: An error occured, please report this to a staff member.");
                                        logger.log("error", "An error occured.", { player: player.name });
                                        logger.log("error", err.message);
                                        logger.log("error", err.stack);
                                    });
                            } else {
                            	// Check if they've finished charCustomization
                            	if (result.created && parseInt(result.created) > 0) {
	                                framework.emit("playerLogin", player, result);
                            	} else {
	                            	framework.emit("playerCharCreation", player, result);
                            	}
                            }
                        })
                        .catch((err) => {
                            player.player.call('loginResponse', false, 'Missing result.body.user - Report to Staff');

                            // player.sendMessage("SERVER: An error occured, please report this to a staff member.");
                            logger.log("error", "An error occured.", { player: player.name });
                            logger.log("error", err.message);
                            logger.log("error", err.stack);
                        });
                });
        }
    }
};