const removeFromArray = function(initialArray, removeFromArray) {
    arrayIndex = initialArray.indexOf(removeFromArray)
    finalArray = initialArray.splice(arrayIndex, 1);
    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
