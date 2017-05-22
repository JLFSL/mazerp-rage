const Collection = require("./classes/Collection"),
      EventEmitter = require("events").EventEmitter,
      Logger = require("./classes/Logger"),
      nodeDir = require("node-dir");

const Player = require("./classes/Player");

module.exports = class Framework extends EventEmitter {
    constructor(options = {}) {
        super();

        if (!options.directories) throw new Error("Directories to be loaded must be specified");
        else if (!options.logger) throw new Error("Logger options must be specified");

        this.logger = new Logger(options.logger).logger;

        this.commands = new Collection(),
        this.events = new Collection();

        for (let i = 0; i < options.directories.length; i++) {
            this.walk(options.directories[i])
                .then((files) => {
                    for (let i = 0; i < files.length; i++) {
                        this.load(files[i])
                            .catch((err) => {
                                this.emit("error", err);
                            });
                    }
                })
                .catch((err) => {
                    this.emit("error", err);
                });
        }

        mp.events.add({ "playerJoin": (player) => {
            player.class = new Player(player);

            this.emit("playerJoin", player.class);
        }});
        
        mp.events.add({ "playerQuit": (player, exitType, reason) => { this.emit("playerQuit", player.class, exitType, reason); }});
        mp.events.add({ "playerDeath": (player, reason, killer) => { this.emit("playerDeath", player.class, reason, killer); }});
        mp.events.add({ "playerEnterVehicle": (player, vehicle, seat) => { this.emit("playerEnterVehicle", player.class, vehicle, seat); }});
        mp.events.add({ "playerEnteredVehicle": (player, vehicle) => { this.emit("playerEnteredVehicle", player.class, vehicle); }});
        mp.events.add({ "playerExitVehicle": (player) => { this.emit("playerExitVehicle", player.class); }});
        mp.events.add({ "playerLeftVehicle": (player, vehicle) => { this.emit("playerLeftVehicle", player.class, vehicle); }});
        mp.events.add({ "playerSpawn": (player) => { this.emit("playerSpawn", player.class); }});
        mp.events.add({ "playerChat": (player, message) => { this.emit("playerChat", player.class, message); }});
        mp.events.add({ "playerCommand": (player, message) => { this.emit("playerCommand", player.class, message); }});

        /* No Documentation */
        // mp.events.add({ "playerEnterCheckpoint": (player) => { this.emit("playerEnterCheckpoint", player); }});
        // mp.events.add({ "playerExitCheckpoint": (player) => { this.emit("playerExitCheckpoint", player); }});
        // mp.events.add({ "playerEnterColshape": (player) => { this.emit("playerEnterColshape", player); }});
        // mp.events.add({ "playerExitColshape": (player) => { this.emit("playerExitColshape", player); }});
    }

    load(path) {
        return new Promise((resolve, reject) => {
            try {
                var module = require(path);
                module.path = path;

                if (module.command) {
                    this.commands.set(module.command.name.toLowerCase(), module.command);
                    this.on(module.command.name, module.command.execute);
                    this.emit("load", "Command", module.command);
                }

                if (module.commands) {
                    for (let i = 0; i < module.commands.length; i++) {
                        module.commands[i].path = module.path;

                        this.commands.set(module.commands[i].name.toLowerCase(), module.commands[i]);
                        this.on(module.commands[i].name, module.commands[i].execute);
                        this.emit("load", "Command", module.commands[i]);
                    }
                }

                if (module.event) {
                    this.events.set(module.event.name.toLowerCase(), module.event);
                    this.on(module.event.name, module.event.execute);
                    this.emit("load", "Event", module.event);
                }

                if (module.events) {
                    for (let i = 0; i < module.events.length; i++) {
                        module.events[i].path = module.path;

                        this.events.set(module.events[i].name.toLowerCase(), module.events[i]);
                        this.on(module.events[i].name, module.events[i].execute);
                        this.emit("load", "Event", module.events[i]);
                    }
                }
            } catch (err) {
                return reject(err);
            }
        });
    }

    unload(type, id) {
        
    }

    reload(type, id) {

    }

    walk(path) {
        return new Promise((resolve, reject) => {
            var f = [];

            nodeDir.files(path, (err, files) => {
                if (err) return reject(err);

                for (let i = 0; i < files.length; i++) {
                    if (!(files[i].includes("node_modules") || files[i].includes("index.js") || files[i].includes("package.json"))) {
                        f.push(files[i]);
                    }
                }

                return resolve(f);
            });
        });
    }
};