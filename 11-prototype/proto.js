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