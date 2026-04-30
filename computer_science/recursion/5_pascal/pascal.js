const pascal = function(step, arr = [1]) {
  if (step === 1) return arr;
  const looper = [0, ...arr, 0]
  const newe = []
  for (let i = 0; i < looper.length; i++) {
    newe.push(looper[i] + looper[i + 1])
  }
  // extra one was popping up because of [i + 1]
  newe.pop()
  const result = pascal(step - 1, newe)
  return result
};


// Do not edit below this line
module.exports = pascal;
