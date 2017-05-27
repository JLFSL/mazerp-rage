const mysql = require("../modules/mysql");

module.exports = class Player {
    constructor(player) {
        this.player = player;
        this.iID;
        this.iEntity;

        this.iCash;
        this.iBankAccount;
        this.stLastPaycheck;
        
        this.pJob;
        this.sJobName;
        this.iJobLevel;
        this.iJobMissions;

        this.fHunger = 0.0;
        this.fThirst = 0.0;
        this.bUnconscious = false;

        this.pFaction;
        this.iFactionRank;
        this.sFactionName;
        this.bOnDuty;

        this.iRent;
        this.iHouse;
    }

    sendMessage(message) {
        this.player.outputChatBox(message);
    }

    setName(name) {
        this.player.name = name;
    }

    get name() {
        return this.player.name;
    }

    get ip() {
        return this.player.ip;
    }

    setPosition(x, y, z, heading) {
        heading = heading || 0;

        this.player.position = new mp.Vector3(x, y, z);
        this.player.heading = heading;
    }

    get position() {
        return this.player.position;
    }

    get heading() {
        return this.player.heading;
    }

    setDimension(dimension) {
        this.player.dimension = dimension;
    }

    get dimension() {
        return this.player.dimension;
    }

    setHealth(health) {
        this.player.health = health;
    }

    get health() {
        return this.player.health;
    }

    setArmour(armour) {
        this.player.armour = armour;
    }

    get armour() {
        return this.player.armour;
    }

    setModel(model) {
        this.player.model = model;
    }

    get model() {
        return this.player.model;
    }

    setAlpha(alpha) {
        this.player.alpha = alpha;
    }

    get alpha() {
        return this.player.alpha;
    }

    get weapon() {
        return this.player.weapon;
    }

    get vehicle() {
        return this.player.vehicle;
    }

    get seat() {
        return this.player.seat;
    }

    spawn(x, y, z, heading) {
        this.player.spawn(new mp.Vector3(x, y, z));
        this.player.heading = heading;
    }

    playAnimation(dictionary, name) {
        this.player.playAnimation(name, dictionary);
        this.sendMessage(`SERVER: Playing animation <b>${name}</b> from <b>${dictionary}</b>`);
    }

    select() {
        return new Promise((resolve, reject) => {
            mysql.getConnection((err, connection) => {
                if (err) return reject(err);

                connection.query("SELECT *, UNIX_TIMESTAMP(\`last_login\`) AS last_login_unix FROM `players` WHERE `username` = ?;", [this.player.name], (err, result) => {
                    if (err) return reject(err);
                    connection.release();

                    if (result.length == 0) return resolve();
                    else return resolve(result[0]);
                });
            });
        });
    }

    insert(object) {
        return new Promise((resolve, reject) => {
            mysql.getConnection((err, connection) => {
                if (err) return reject(err);

                connection.query(`INSERT INTO \`players\` SET ?;`, object, (err, result) => {
                    if (err) return reject(err);

                    connection.query(`SELECT *, UNIX_TIMESTAMP(\`last_login\`) AS last_login_unix FROM \`players\` WHERE \`id\` = ?;`, [result.insertId], (err, result) => {
                        if (err) return reject(err);

                        connection.release();
                        return resolve(result[0]);
                    });
                });
            });
        });
    }

    update(object) {
        return new Promise((resolve, reject) => {
            mysql.getConnection((err, connection) => {
                if (err) return reject(err);

                var query = `UPDATE \`players\` SET`;

                for (var key in object) {
                    if (object[key] == "CURRENT_TIMESTAMP") query += ` ${connection.escapeId(key)} = CURRENT_TIMESTAMP,`;
                    else query += ` ${connection.escapeId(key)} = ${connection.escape(object[key])},`;
                }

                query = `${query.replace(/,(?=[^,]*$)/, "")} WHERE \`username\` = ${connection.escape(this.player.name)};`;

                connection.query(query, (err, result) => {
                    if (err) return reject(err);

                    connection.query(`SELECT *, UNIX_TIMESTAMP(\`last_login\`) AS last_login_unix FROM \`players\` WHERE \`username\` = ?;`, [this.player.name], (err, result) => {
                        if (err) return reject(err);

                        connection.release();
                        return resolve(result[0]);
                    });
                });
            });
        });
    }
};
