'use strict';

console.log("Arrow Functions");

var square = function square(x) {
    return x * x;
};

var squareArrow = function squareArrow(x) {
    return x * x;
};

var x = 8;

console.log('Square of ' + x + ' is: ', squareArrow(x));
