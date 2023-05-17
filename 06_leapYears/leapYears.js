function leapYears(num) {
    let leapYearStatus = undefined;
    if (typeof num !== "number"){
        return "ERROR";
    } else {
        if (num%400 === 0 || num%4 === 0 && num%100 !== 0){
            leapYearStatus = true;
        } else {
            leapYearStatus = false;
        }
    }
    return leapYearStatus;
};

// Do not edit below this line
module.exports = leapYears;
