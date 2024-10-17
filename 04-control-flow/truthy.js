
// truthy values
// false, 0, -0, bigInt 0n, null, NaN, undefined, ''
// const user = 'sumesh'
// const user = ''
// const user = []
// const user = '0'
// const user = 'false'
// const user = ' '
// const user = {}
const user = function(){}

if(user){
    console.log(`This is true value`);
} else{
    console.log(`this is false value`);
}

// checking array and objects are empty
const myArray = []
const myObj = {name:'sumesh'}
if(myArray.length === 0){
    console.log(`This is empty array`);
}
if (Object.keys(myObj).length === 0){
    console.log(`the object is empty`);
}

// nullish value +++ ?? - null, undefined
var val = undefined;

console.log(val); // undefined

//  val = undefined ?? 10;

console.log(val); // 10

// ternary operator
// condition ? true : false
price = 100
price >= 600 ? console.log('true'): console.log('false');