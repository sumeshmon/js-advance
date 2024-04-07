const score = 300.33
// console.log(score) // javascript default will consider this is a number

const balance = new Number(score)
// console.log(balance);// this will convert the type in to number
const checkType = balance.toLocaleString(); // this will convert to string

console.log(typeof checkType);
// console.log(balance.toExponential());

//console.log(balance.toString().length);

console.log(balance.toFixed(4));

//console.log(balance.toPrecision(3));

// +++++++++ maths ++++++++++++

//console.log(Math.abs(-3)); // convert negative in to postive value

//console.log(Math.round(2.4)); // this will round the value according to the after .

//console.log(Math.ceil(6.1)); // to display the top value

//console.log(Math.floor(5.9)); // to display the low value

//console.log(Math.sqrt(100)); // to display the square root

//console.log(Math.min(5,2,8,7)); // to display the lowest number of an array

//console.log(Math.max(8,6,4,1)); // to diplay the max value of an array

//console.log(Math.random()); // to display the random number between 0 to 1

min = 10
max = 20
//console.log(Math.floor((Math.random() * (max - min)) + min));

