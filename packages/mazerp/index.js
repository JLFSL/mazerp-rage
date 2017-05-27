const Framework = require("./framework"),
      functions = require("./functions");
      path = require("path"),
      variables = require("./variables");
      Vehicle = require ("./classes/Vehicle.js");

const framework = new Framework({
    directories: [path.resolve(__dirname, "modules")],
    logger: {
        directory: path.resolve(__dirname, "logs"),
        level: "debug"
    }
});

framework.on("load", (type, module) => {
    framework.logger.log("info", `Loaded ${type} ${module.name}.`);
});

framework.on("error", (err) => {
    framework.logger.log("error", err.message);
    framework.logger.log("info", err.stack);
});

module.exports = framework;
module.exports.functions = functions;
module.exports.variables = variables;

Vehicle.load();

/* California Highway Patrol */

/* Los Santos Fire Department */

/* Department of Justice */

/* Random Vehicles */