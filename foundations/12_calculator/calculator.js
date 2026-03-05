const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(a) {
  return a.reduce((sum = 0, num) => sum += num, 0)	
};

const multiply = function(a) {
  return a.reduce((sum , num) => sum *= num, 1)	;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  let result = 1;
  if (a === 0 || a === 1) {
    return 1;
  } else {
    for (let i = 1; i <= a; i++) {
      result *= i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
