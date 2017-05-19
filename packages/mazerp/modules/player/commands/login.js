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
            if (arguments.length < 3) return functions.sendPlayerMessage(player, "The usage for that command is <email> <password>.");
            
            request.post('https://ucp.mazerp.com/api/auth/user')
            .send(`email=${arguments[1]}`)
            .send(`password=${arguments[2]}`)
            .end(function(err, res){
                if(err) throw err;

                var resobj = JSON.parse(res.text);
                if(resobj.status === "success")
                {
                    pool.getConnection(function(err, connection) {
                        if (err) throw err;

                        // Use the connection
                        connection.query({ 
                            sql: 'SELECT * FROM `players` WHERE `username` = ?', 
                            timeout: 15000, 
                            values: `${player.name}`
                        },

                        function (error, results, fields) {
                            if(Object.keys(results).length === 0)
                            {
                                functions.sendPlayerMessage(player, "SERVER: Character not found in the database, check your login details.");
                            }
                            else
                            {
                                logger.log("debug", `staffLevel: ${results[0].staff}`);
                                functions.sendPlayerMessage(player, "SERVER: Successfully logged in.");

                                // And done with the connection.
                                connection.release();

                                // Handle error after the release.
                                if (error) throw error;

                                // Don't use the connection here, it has been returned to the pool.
                            }
                        });
                    });
                }
            });
        }
    }
};