const myArray = ['sumesh']
const myObj = {name:'sumesh'}

// creating top level function in an object

Object.prototype.sumesh = function(){
    console.log(`I am sumesh from object`);
}
Array.prototype.subi = function () {
    console.log(`I am subi from array`);
}

myObj.sumesh()
myArray.sumesh()

// myObj.subi()
myArray.subi()