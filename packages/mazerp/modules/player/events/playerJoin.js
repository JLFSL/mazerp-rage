const functions = require("../../../functions"),
      framework = require("../../../"),
      logger = framework.logger,
      pool = require("../../mysql"),
      variables = require("../../../variables");

module.exports = {
    event: {
        name: "playerJoin",
        execute: (player) => {
            player.sendMessage = (message) => {
                player.outputChatBox(message);
            };

            player.create = () => {
                return new Promise((resolve, reject) => {
                    pool.getConnection((err, connection) => {
                        if (err) return reject(err);

                        var spawn = variables.spawn[Math.floor(Math.random() * variables.spawn.length)];

                        connection.query("INSERT INTO players SET ?;", { username: player.name, position_x: spawn.position.x, position_y: spawn.position.y, position_z: spawn.position.z, heading: spawn.heading }, (err, result) => {
                            if (err) return reject(err);

                            connection.query("SELECT *, UNIX_TIMESTAMP(`last_login`) as last_login_unix FROM players WHERE username = ?;", [player.name], (err, result) => {
                                if (err) return reject(err);

                                connection.release();
                                return resolve(result[0]);
                            });
                        });
                    });
                });
            },

            player.find = () => {
                return new Promise((resolve, reject) => {
                    pool.getConnection((err, connection) => {
                        if (err) return reject(err);

                        connection.query("SELECT *, UNIX_TIMESTAMP(`last_login`) as last_login_unix FROM players WHERE username = ?;", [player.name], (err, result) => {
                            if (err) return reject(err);
                            else if (result.length < 1) return resolve(null);

                            connection.release();
                            return resolve(result[0]);
                        });
                    });
                });
            };

            player.save = () => {
                return new Promise((resolve, reject) => {
                    pool.getConnection((err, connection) => {
                        if (err) return reject(err);

                        connection.query("UPDATE players SET health = ?, armor = ?, money = ?, position_x = ?, position_y = ?, position_z = ?, heading = ? WHERE username = ?;", [player.health, player.armour, player.money, player.position.x, player.position.y, player.position.z, player.heading, player.name], (err, result) => {
                            if (err) return reject(err);

                            connection.query("SELECT *, UNIX_TIMESTAMP(`last_login`) as last_login_unix FROM players WHERE username = ?;", [player.name], (err, result) => {
                                if (err) return reject(err);

                                connection.release();
                                return resolve(result[0]);
                            });
                        });
                    });
                });
            };

            // This will be the login page in the future.
            player.sendMessage("SERVER: Welcome! You must /login to continue.");
        }
    }
};