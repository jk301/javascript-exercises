const contains = function(object, find) {
  for (let [key, value] of Object.entries(object)) {
    if (value === find || Number.isNaN(value) && Number.isNaN(find)) {
      return true
    } else if (typeof value === "object" && value !== null) {
      const result = contains(value, find)
      if (result === true) return true;
    }
  }
  return false
};
  
// Do not edit below this line
module.exports = contains;
