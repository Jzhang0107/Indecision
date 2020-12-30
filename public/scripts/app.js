"use strict";

// console.log("Arrow Functions");

// const getFirstName = (fullName) =>
// {
//     return fullName.split(" ")[0];
// };

// const getFirstNameArr = (fullName) => fullName.split(" ")[0];

// const fullName = "Yukina Himeragi";

// console.log('Square of ' + x + ' is: ', squareArrow(x));
// console.log("The first name of " + fullName + " is", getFirstNameArr(fullName));

var multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this = this;

        return this.numbers.map(function (num) {
            return num * _this.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
