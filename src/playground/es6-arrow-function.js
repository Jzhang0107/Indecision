// console.log("Arrow Functions");

const getFirstName = (fullName) =>
{
    return fullName.split(" ")[0];
};

const getFirstNameArr = (fullName) => fullName.split(" ")[0];

const fullName = "Yukina Himeragi";

// console.log('Square of ' + x + ' is: ', squareArrow(x));
console.log("The first name of " + fullName + " is", getFirstNameArr(fullName));