// Primitive
// 7 types : String, Number, undefined, boolen, null, Symbol, BigInt

let myString = "sumesh"
//console.log(typeof myString);

let mynumber = 12
//console.log(typeof mynumber);

let isLoggedIn = false
//console.log(typeof isLoggedIn);

let outSideTemp = null
//console.log(outSideTemp);

let userEmail
//console.log(typeof userEmail);

let id = Symbol (123)
let userId = Symbol (123)

console.log(id === userId);


// Referance (non primitive)
// Arry, Objects, Functions

let cricket = ["Sachin", "Sewang","Gaguly"]
console.log(Array.isArray(cricket) );
console.log(typeof cricket);


const bestActors = {
    Malayalam : "Mohanlal",
    Tamil : "Rajani",
    Telugu : "Chiranjeevi"
}

console.log(typeof bestActors);

const isOdd = function(){
    num1 = 15
    if(num1%2 == 0 ){
        console.log("This is odd");
    } else {
        console.log("Not odd");
    }
}
//isOdd()
console.log(typeof isOdd);

const checkTypeFunction = function (){

}
console.log(`Checking the type of function: yes it is a ${typeof checkTypeFunction}`);