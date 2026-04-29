const factorial = function(num) {
    if (num < 0 || typeof num !== "number" || num % 1 !== 0) {
        return 
    } else if (num === 1 || num === 0) {
        return 1
    } else {
        return num * factorial(num - 1)
    }
};

// Do not edit below this line
module.exports = factorial;