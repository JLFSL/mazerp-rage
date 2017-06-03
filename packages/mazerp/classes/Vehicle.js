const   mysql       = require("../modules/mysql"),
        variables   = require("../variables");

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

                    for(var i = 0; i < result.length; i++)
                    {
                        console.log(result[i].model_name);

                        var position = new mp.Vector3(result[i].position_x, result[i].position_y, result[i].position_z);
                        var rotation = new mp.Vector3(result[i].rotation_x, result[i].rotation_y, result[i].rotation_z);

                        var veh = mp.vehicles.new(mp.joaat(result[i].model_name), position);
                        veh.dimension = variables.dimensions.public;
                        veh.rotation = rotation;
                    }
                
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
