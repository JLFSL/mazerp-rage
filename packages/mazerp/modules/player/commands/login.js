const request = require("superagent"),
      pool = require("../../mysql.js"),
      functions = require("../../../functions"),
      framework = require("../../../"),
      logger = framework.logger,
      variables = framework.variables;

module.exports = {
    command: {
        aliases: [""],
        name: "Login",
        execute: (player, message, arguments) => {
            if (arguments.length < 3) return functions.sendPlayerMessage(player, "The usage for that command is (/login [email] [password])");
            
            // Send POST request to check if user is whitelisted
            request.post('https://ucp.mazerp.com/api/auth/user')
                .send(`email=${arguments[1]}`)
                .send(`password=${arguments[2]}`)
            .end(function(err, res) {
                // Throw error if any
                if(err) throw err;

                // Convert the result to an Object
                var resobj = JSON.parse(res.text);

                // Check if the request's status was successful.
                if(resobj.status === "success")
                {
                    // Retrieve the current mysql connection
                    pool.getConnection(function(err, connection) {
                        // Throw error if any
                        if (err) throw err;

                        // Use the connection to get the player's data from the `players` table.
                        connection.query({ 
                            sql: 'SELECT * FROM `players` WHERE `username` = ?', 
                            timeout: 15000, 
                            values: `${player.name}`
                        },

                        // Execute the query
                        function (error, results, fields) {
                            // Check if the result is empty and no rows were found.
                            if(Object.keys(results).length === 0)
                            {
                                functions.sendPlayerMessage(player, "SERVER: Character not found in the database, check your login details.");
                            }
                            else
                            {
                                logger.log("debug", `${player.name} successfully logged in. (ADMIN: ${results[0].staff})`);
                                functions.sendPlayerMessage(player, `SERVER: Successfully logged in.`);

                                // Public world, where all the roleplay happens.
                                player.dimension = variables.dimensions.public;
                                
                                // And done with the connection.
                                connection.release();

                                // Handle error after the release.
                                if (error) throw error;
                            }
                        });
                    });
                }
                else
                {
                    functions.sendPlayerMessage(player, "SERVER: Could not login to your forum account. Did you fill in the right details and are you whitelisted as a <b>civilian</b>?");
                }
            });
        }
    }
};