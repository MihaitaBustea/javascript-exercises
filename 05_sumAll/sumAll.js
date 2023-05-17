function sumAll(x, y) {
    let sum = 0;
    if (typeof x !== "number" || typeof y !== "number") {
        return "ERROR";
    } else if (x < 0 || y < 0){
        return "ERROR";
    } else {
        let smallNum = 0;
        let bigNum = 0;
        if (x >= y){
            smallNum = y;
            bigNum = x;
        } else {
            smallNum = x;
            bigNum = y;
        }
        for (let i = smallNum; i <= bigNum; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
