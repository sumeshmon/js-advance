// Stack (Primitive) and Heap (Non Primitive)

// Stack memories is copy 
// Heap memory is the referance

// Stack example
let myCar = "Honda Brio"
let myNewCar = myCar
myCar = "BMW"
console.log(myCar,myNewCar);


// Heap
let userOne = {
    name : "Sumesh",
    age : 22
}
let usertwo = {
    name : "Sali",
    age : 23
}
// userOne = usertwo
userOne.name = "Tejas"

console.log(userOne, usertwo);