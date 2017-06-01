const mysql = require("../modules/mysql");

module.exports = class Vehicle {
    constructor(vehicle) {
        this.vehicle = vehicle;
        this.iID;
        this.iEntity;

        this.sModelname;

        this.iFaction;
        this.iOwner;

        this.iColor1;
        this.iColor2;
    }

    get modelname() {
        return this.vehicle.sModelname;
    }

    setPosition(x, y, z, heading) {
        heading = heading || 0;

        this.vehicle.position = new mp.Vector3(x, y, z);
        this.vehicle.heading = heading;
    }

    get position() {
        return this.vehicle.position;
    }

    get heading() {
        return this.vehicle.heading;
    }

    setDimension(dimension) {
        this.vehicle.dimension = dimension;
    }

    get dimension() {
        return this.vehicle.dimension;
    }

    setHealth(health) {
        this.vehicle.health = health;
    }

    get health() {
        return this.vehicle.health;
    }

    setAlpha(alpha) {
        this.vehicle.alpha = alpha;
    }

    get alpha() {
        return this.vehicle.alpha;
    }

    static load() {
        return new Promise((resolve, reject) => {
            mysql.getConnection((err, connection) => {
                if (err) return reject(err);

                connection.query("SELECT * FROM `vehicles`;", (err, result) => {
                    if (err) return reject(err);
                    connection.release();

                    console.log(result[0].model_name);

                    if (result.length == 0) return resolve();
                    else return resolve(result[0]);
                });
            });
        });
    }

    /*insert(object) {
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
    }*/
};
