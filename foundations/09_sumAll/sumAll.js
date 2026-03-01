const sumAll = function(initial, end) {
    if (Number.isInteger(initial) === false || initial < 0 || Number.isInteger(end) === false || end < 0) {
        return "ERROR"
    } else {
        let sum = 0;
        for (let i = Math.min(initial, end); i <= Math.max(initial, end); i++) {
            sum += i ;
        }
        return sum
    }
};
// Do not edit below this line
module.exports = sumAll;
