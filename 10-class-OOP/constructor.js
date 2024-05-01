function User (username,isLoggedIn,loginCount) {
    this.username = username
    this.isLoggedIn = isLoggedIn
    this.loginCount = loginCount
    // console.log(this);
    // return this
}

const userOne = new User('sumesh',false,4)
const userTwo = new User('Sali',true,8)
// console.log(userTwo);


// instanceof
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
// The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. Its behavior can be customized with Symbol.hasInstance.


