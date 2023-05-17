function removeFromArray(arr, ...args) {
    let index = 0;
    for (const number of args){
        for (const element of arr) {
            if (number === element ) {
                index = arr.indexOf(element);
                arr.splice(index, 1);
            }
        }    
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
