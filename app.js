const fs = require("fs");
const { program } = require("commander");
const chalk = require("chalk");
const pckg = require("./package.json");
const stream = require("stream");
const util = require("util");

const Validator = require("./helpers/validator");
const DataTransform = require("./helpers/transform");

const pipeline = util.promisify(stream.pipeline)

const { log, info } = console;
const errorMessage = chalk.red.bold("✘ Error")
const codeMessage = chalk.yellow.bold("Code");

const actionHandler = async () => {
    let { input, output, action } = program.opts();

    if (!Validator.isIn(action, ["string", "array"])) {
        process.stderr.write(
            `${errorMessage}  \"Action must be included in the given list ['string', 'array', 'allAtOnce'] :(\"\n`
        );
        process.exit(1);
    }

    Validator.isEmpty(input) && info (
        chalk.white (
            "Input text [press ENTER to execute task | press CTRL + C to exit]:"
        )
    );

    const ReadableStream = !Validator.isEmpty(input) ? fs.createReadStream(input) : process.stdin;
    const WriteableStream = !Validator.isEmpty(output) ? fs.createWriteStream(output) : process.stdout;

    try {
        await pipeline(
            ReadableStream,
            new DataTransform(action),
            WriteableStream
        );
        process.stdout.write(`Text ${action}\n`)
    } catch (e) {
        process.stderr.write(`${e.message} \n`);
        process.exit(1);
    }

}

process.stdin.setEncoding("utf8");
process.on("exit", (code) => log(`${codeMessage} ${code}`));
process.on("SIGINT", () => {
    process.exit(0);
});

program.storeOptionsAsProperties(false).version(pckg.version);

program
    .requiredOption("-a, --action <action>", "An action array/string")
    .option("-i, --input, <inputFile>", "An input file.")
    .option("-o, --output, <outputFile>", "An output file.")
    .action(actionHandler);

program.parse(process.argv);
