function repeatString(str, num) {
    let stringToAdd = ""
    if (num < 0) {
        return "ERROR";
    } else if (num === 0) {
        return "";
    } else {
        while (num > 0) {
            stringToAdd += str;
            num--;
        }
        return stringToAdd;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
