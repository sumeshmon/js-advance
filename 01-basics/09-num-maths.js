const score = 300
console.log(score) // javascript default will consider this is a number

const balance = new Number(200.26455)
//console.log(balance);// this will convert the type in to number
const checkType = balance.toLocaleString(); // this will convert to string

console.log(typeof (checkType));
// console.log(balance.toExponential());

console.log(balance.toString().length);

console.log(balance.toFixed(2));

console.log(balance.toPrecision(3));