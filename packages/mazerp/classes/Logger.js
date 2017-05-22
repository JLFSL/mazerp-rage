const colors = require("colors"),
      moment = require("moment"),
      winston = require("winston");

module.exports = class Logger {
    constructor(options = {}) {
        this.logger = new(winston.Logger)();
		
        this.logger.add(winston.transports.Console, {
            formatter: (options) => {
                return this.colorize(options.level, `[${moment().format("MMM Do YYYY, h:mm:ss a")}] [${options.level.toUpperCase()}] ${options.message ? options.message:""} ${(options.meta && Object.keys(options.meta).length) ? "\n\t" + JSON.stringify(options.meta):"" }`);
            },
			
            level: options.level
        });
		
        if (options.directory) {
            require('winston-daily-rotate-file');
			
            this.logger.add(winston.transports.DailyRotateFile, {
                datePattern: " ",
                filename: `${options.directory}/${moment().format("M-D-YYYY")}.log`,
                level: options.level
            });
        }
    }
	
    colorize(level, input) {
        if (level == "trace") return colors.magenta(input);
        else if (level == "input") return colors.grey(input);
        else if (level == "verbose") return colors.cyan(input);
        else if (level == "promt") return colors.grey(input);
        else if (level == "debug") return colors.green(input);
        else if (level == "info") return colors.blue(input);
        else if (level == "data") return colors.grey(input);
        else if (level == "help") return colors.help(input);
        else if (level == "warn") return colors.yellow(input);
        else if (level == "error") return colors.red(input);
    }
};