const permutations =  function (array) {
    const result = []
    if (array.length <= 1) {
        return [array]
    };
    array.forEach( item => {
        const newArray = array.filter(el => el !== item)
        const mutate = permutations(newArray)
        mutate.forEach(per => {
            result.push([item, ...per])
        })
    })
    return result
}

  
// Do not edit below this line
module.exports = permutations;
