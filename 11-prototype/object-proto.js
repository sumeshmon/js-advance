// +++++++++++++ Testing this in normal function and arrow function ++++++++++

function test() {
    console.log(this);
    console.log(`I am from normal function ${this}`);
}
// test()

const arrowTest = () => {
    console.log(this);
    console.log(`I am from arrow function ${this}`);
}

// arrowTest()

// checking prototype
function multiply (param){
    return param * 5
}

multiply.testProto = 3 

// console.log(multiply(6));
// console.log(multiply.prototype);
// console.log(multiply.testProto);

// importance of new keyword
function createUser (username,score){
    this.username = username
    this.score = score
}

createUser.prototype.test = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`My scrore is ${this.score}`);
}

const school = new createUser('sumesh',30)
const home = new createUser('subi',1)
home.printMe()
console.log(school.username);


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/