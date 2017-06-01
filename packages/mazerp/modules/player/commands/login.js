const framework = require("../../../"),
      functions = require("../../../functions"),
      logger = framework.logger,
      pool = require("../../mysql"),
      variables = require("../../../variables");

const superagent = require("superagent");

module.exports = {
    command: {
        aliases: [],
        name: "Login",
        execute: (player, message, arguments) => {
            if (player.logged_in)
                return player.sendMessage("SERVER: You are already logged in.");

            else if (arguments.length < 3)
                return player.sendMessage("The usage for that command is (/login [email] [password]).");

            superagent
                .post("https://ucp.mazerp.com/api/auth/user")
                .send({ email: arguments[1] })
                .send({ password: arguments[2] })
                .then((result) => {
                    if (result.body.status !== "success") return player.sendMessage("SERVER: Could not login to your forum account. Did you fill in the right details and are you whitelisted as a <b>civilian</b>?");
                    player.sendMessage("SERVER: You have successfully logged into your account.");

                    player.setName(result.body.user);
                    player.select()
                        .then((result) => {
                            if (!result) {
                                var spawn = variables.spawn[Math.floor(Math.random() * variables.spawn.length)];

                                player.insert({ username: player.name, position_x: spawn.position.x, position_y: spawn.position.y, position_z: spawn.position.z, heading: spawn.heading })
                                    .then((result) => {
                                        framework.emit("playerLogin", player, result);
                                    })
                                    .catch((err) => {
                                        player.sendMessage("SERVER: An error occured, please report this to a staff member.");
                                        logger.log("error", "An error occured.", { player: player.name });
                                        logger.log("error", err.message);
                                        logger.log("error", err.stack);
                                    });
                            } else {
                                framework.emit("playerLogin", player, result);
                            }
                        })
                        .catch((err) => {
                            player.sendMessage("SERVER: An error occured, please report this to a staff member.");
                            logger.log("error", "An error occured.", { player: player.name });
                            logger.log("error", err.message);
                            logger.log("error", err.stack);
                        });
                });
        }
    }
}