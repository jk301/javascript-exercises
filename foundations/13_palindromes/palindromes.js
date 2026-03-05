const palindromes = function (string) {
    plain = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversed = plain.split("").reverse().join("");
    return plain === reversed ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
