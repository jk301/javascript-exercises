const findTheOldest = function(people) {
    let ageList = [];
    let currentYear = new Date().getFullYear();
    for (let item of people) {
        if (item.yearOfDeath === undefined) item.yearOfDeath = currentYear;
        ageList.push({
            name: item.name,
            age: item.yearOfDeath - item.yearOfBirth
        })
    }
    return ageList.reduce((max, user) => user.age > max.age ? user : max)
};
// Do not edit below this line
module.exports = findTheOldest;
