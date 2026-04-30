const totalIntegers = function(object) {
    if (typeof object !== "object") return
    let counter = 0
    const array = Object.values(object)
    array.forEach (item => {
        if(Number.isInteger(item)){
            counter++
            console.log("it is " + `counter : ${counter}`)
        } else if (typeof item === "object" && item !== null) {
            const val = totalIntegers(item)
            counter += val
            console.log("it is not " + `counter : ${counter}`)
        }
    })
    return counter
}
  
// Do not edit below this line
module.exports = totalIntegers;
