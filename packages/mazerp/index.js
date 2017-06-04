const Framework = require("./framework"),
      functions = require("./functions");
      path = require("path"),
      variables = require("./variables");
      Vehicles = require ("./classes/Vehicle.js");

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

Vehicles.load();

for(var storeNum in variables.convenientStores) {
    let store = variables.convenientStores[storeNum];
    let sphere = mp._colshapes.newSphere(store["position"].x, store["position"].y, store["position"].z, store["radius"]);
    variables.ConvenientStoreInfo[storeNum] = sphere.id;
    ///let newBlip = mp.blips.new(store["position"], store["radius"]);
}

/* California Highway Patrol */
let policeLoadoutPos = new mp.Vector3(458.826416015625,-990.9177856445312, 30.689605712890625);
//let policeLoadout = mp.checkpoints.new(1,policeLoadoutPos,policeLoadoutPos,policeLoadoutPos, 2, 0, 255, 0, 255, true, variables.dimensions.public); // prob buggy

/* Los Santos Fire Department */

/* Hospital */

/* Department of Justice */

/* Random Vehicles */
