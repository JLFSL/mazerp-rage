const framework = require("../../../"),
      logger = framework.logger,
      variables = framework.variables;
      pool = require("../../mysql.js");

module.exports = {
    event: {
        name: "playerJoin",
        execute: (player) => {
            logger.log("debug", `${player.name} joined, IP: ${player.ip}.`);

            // This will be loaded from the database in the future
            var spawn = variables.spawn[Math.floor(Math.random() * variables.spawn.length)];
            player.spawn(spawn.position);
            player.heading = spawn.heading;
            player.dimension = 1;

            pool.getConnection(function(err, connection) {
                if (err) throw err;

                // Use the connection
                connection.query({ 
                    sql: 'SELECT * FROM `players` WHERE `username` = ?', 
                    timeout: 40000, 
                    values: `${player.name}`
                },

                function (error, results, fields) {
                    logger.log("debug", `staffLevel: ${results[0].staffLevel}`);

                    // And done with the connection.
                    connection.release();

                    // Handle error after the release.
                    if (error) throw error;

                    // Don't use the connection here, it has been returned to the pool.
                });
            });
        }
    }
};