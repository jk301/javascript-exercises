const getTheTitles = function(books) {
    let list = [];
    for (let item of books) {
        list.push(item.title);
    }
    return list;
};

// Do not edit below this line
module.exports = getTheTitles;
