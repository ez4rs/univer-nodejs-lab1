class Validator{
    static isEmpty(value) {
        if (value === undefined) return true;

        if (
            typeof value == "function" ||
            typeof value == "number" ||
            typeof value == "boolean" ||
            Object.prototype.toString.call.value === "[object Date]"
        ) return false;

        return value === null || value.length === 0;


    }

    static isIn(value, array) {
        return array.includes(value);
    }

    static isArray(value) {
        if (Array.isArray(value))
            return value;
        else {
            process.stderr.write("Value is not an array.\n");
            process.exit(1);
        }
    }
}

module.exports = Validator;