const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    } else if (typeof num1 != "number" || typeof num2 != "number") {
        return 'ERROR';
    }
  let numFinal1 = 0;
  let numFinal2 = 0;
    if (num1 > num2) {
        numFinal2 = num1;
        numFinal1 = num2;
    } else {
        numFinal1 = num1;
        numFinal2 = num2;
    }
    let finalSum = 0;

    for (let i = numFinal1; i < (numFinal2 + 1); i++) {
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
