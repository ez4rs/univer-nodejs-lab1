const chalk = require("chalk");
const { Transform } = require("stream");

class DataTransform extends Transform {
    constructor(action) {
        super();
        this.action = action;
    }

    _transform(chunk, encoding, callback) {
        let rot = ""

        switch (this.action) {
            case "array":
                break;
            case "string":
                break;
            case "allAtOnce":
                break;
            default:
                process.stderr.write(chalk.red("Error") + ' "Action not found :("\n');
                process.exit(1);
        }
    }
}