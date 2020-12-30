"use strict";

// console.log("Arrow Functions");

var getFirstName = function getFirstName(fullName) {
    return fullName.split(" ")[0];
};

var getFirstNameArr = function getFirstNameArr(fullName) {
    return fullName.split(" ")[0];
};

var fullName = "Yukina Himeragi";

// console.log('Square of ' + x + ' is: ', squareArrow(x));
console.log("The first name of " + fullName + " is", getFirstNameArr(fullName));
