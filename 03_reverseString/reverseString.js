function reverseString(str) {
    let finalString = "";
    let charList = str.split("");
    charList.reverse();
    for (const char of charList) {
        finalString += char;
    }
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
