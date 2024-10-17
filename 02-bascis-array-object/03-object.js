//singleton

// object literals
const mySymbol = Symbol()
const myTest = Symbol()

const user = {
    name: "Sumesh",
    "full name" : "Sumesh",
    [mySymbol] : "myKey2",
    age : 19,
    location : "Kerala",
    isLoggedIn : false,
    lastLoggedDates : ["Monday", "Saturday"]
}
const test = {
    [myTest] : "test symbol",
    name : 'sumesh'
}
// machine will consider the key as a string
//console.log(user.age);
//console.log(user["age"]); 
//console.log(user["full name"]);
console.log(user[mySymbol]);
console.log(test[myTest]);

user.name = "sali"
//Object.freeze(user) // can't change the object values
user.name = "Thertha"

//console.log(user["name"]);

//console.log(user);

user.greeting = function(){
    console.log("Greeting from Aripalam");
}
user.greeting()

user.greetingOne = function(){
    console.log(`Greeting from Kerala, ${user[mySymbol]}`);
}
user.greetingOne()

user.greetingTest = function(){
    console.log(`Test, ${test[myTest]}`);
}
user.greetingTest()