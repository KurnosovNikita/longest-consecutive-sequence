module.exports = function longestConsecutiveLength(array) {
    array.sort(compareNumbers);
    do {
        removeTwin(array);

    } while (!isSameNumbers(array));
    var k = 1;
    var lastCount = 0;
    if (array.length > 1) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] - array[i + 1] === -1) {
                k++;
            } else if (array[i] - array[i + 1] !== -1) {
                if (k > 1) {
                    if (k > lastCount) {
                        lastCount = k;
                        k = 1;
                    } else {
                        k = 1;
                    }
                } else if (k == 1) {
                    if (k > lastCount) {

                        lastCount = k;
                        k = 1;
                    }
                    k = 1;
                }
            }
        }
        return lastCount;
    } else if (array.length == 1) {
        return 1;
    } else if (array.length == 0) {
        return 0;
    }
    // your solution here
}

function compareNumbers(a, b) {
    return a - b;
}

function isSameNumbers(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) {
            return false;
        }
    }
    return true;
}

function removeTwin(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) {
            array.splice(i, 1);
        }

    }
    return array;
}