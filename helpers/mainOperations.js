function stringOperation(str) {
    const numbers = Number(str);
    let array;
    let numbersArray = [];
    let newArray = [];

    if (Number.isInteger(numbers)) {
        array = str.match(/[0-9]/g);
        array.forEach(number => {
            numbersArray.push(Number(number));
        });

        numbersArray.forEach(number => {
            if (number % 2) {
                if (newArray[newArray.length - 1] === "-") {
                    newArray.push(number.toString());
                    newArray.push("-");
                } else {
                    newArray.push("-");
                    newArray.push(number.toString());
                    newArray.push("-");
                }
            } else {
                newArray.push(number.toString());
            }
        });

        if(newArray[0] === "-")
            newArray.shift();
        if(newArray[newArray.length - 1] === "-")
            newArray.pop();

        return newArray.join('');
    } else if (isNaN(str)) {
        return NaN
    }
    return null;
}

module.exports.stringOperation = stringOperation;

function arrayOperation(arr) {
    let inversions = [];
    let inversionCount = 0;

    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                let swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
                inversions.push(`${arr[j]} and ${arr[j+1]}`);
                inversionCount++;
            }
        }
    }
    if (inversionCount > 0) {
        return `${inversionCount} inversions: ${inversions.join(", ")}`;
    } else {
        return `${inversionCount} inversions`;
    }
}

module.exports.arrayOperation = arrayOperation;