const framework = require("../../../"),
      functions = require("../../../functions"),
      logger = framework.logger,
      pool = require("../../mysql"),
      variables = require("../../../variables");

module.exports = {
    event: {
        name: "playerLogin",
        execute: (player, account) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    player.sendMessage("SERVER: An error occured, please report this to a staff member.");
                    logger.log("error", "An error occured.", { player: player.name });
                    logger.log("error", err.message);
                    return logger.log("error", err.stack);
                }

                connection.query("UPDATE players SET last_login = CURRENT_TIMESTAMP WHERE username = ?;", [player.name], (err, result) => {
                    if (err) {
                        player.sendMessage("SERVER: An error occured, please report this to a staff member.");
                        logger.log("error", "An error occured.", { player: player.name });
                        logger.log("error", err.message);
                        return logger.log("error", err.stack);
                    }

                    connection.release();
                });
            });

            player.health = account.health;
            player.armour = account.armor;
            player.dimension = 1;

            if (Math.round((new Date()).getTime() / 1000) - 600 > account.last_login_unix) {
                var spawn = variables.spawn[Math.floor(Math.random() * variables.spawn.length)];

                player.spawn(spawn.position);
                player.heading = spawn.heading;
            } else {
                player.spawn(new mp.Vector3(account.position_x, account.position_y, account.position_z));
                player.heading = account.heading;
            }

            player.wallet = {
                money: account.money
            };
            
            player.staff = account.staff;
            player.loggedIn = true;
        }
    }
};