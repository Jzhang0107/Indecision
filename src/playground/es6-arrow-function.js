console.log("Arrow Functions");

const square = function(x)
{
    return x * x;
};

const squareArrow = (x) => 
{
    return x * x;
};

const x = 8

console.log('Square of ' + x + ' is: ', squareArrow(x));