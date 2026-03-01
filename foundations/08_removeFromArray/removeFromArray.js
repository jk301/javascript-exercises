const removeFromArray = function(array, ...num) {
    for (let i = 0; i < array.length; i++) {
        for (let item of num) {
            if (array.includes(item)) {
                array.splice(array.indexOf(item), 1);
            }
        }
    }
    return array;
};


// Do not edit below this line
module.exports = removeFromArray;
