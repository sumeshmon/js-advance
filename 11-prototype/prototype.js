const myArray = ['sumesh']
const myObj = {name:'sumesh'}

// creating top level function in an object

Object.prototype.sumesh = function(){
    console.log(`I am sumesh from object`);
}
Array.prototype.subi = function () {
    console.log(`I am subi from array`);
}

// myObj.sumesh()
// myArray.sumesh()

// myObj.subi()
// myArray.subi()

// ++++++++++++ inheritance ++++++++++++

const user = {
    name:'sumesh',
    email:'sumesh@sumesh.com'
}
const isTeacher = {
    videpUpload : true
}
const isAssistance = {
    available: false,
    __proto__: user
}

console.log(isAssistance.name); // name is an diiferent object that accessed by __proto__
console.log(isAssistance.available);

console.log('break');

isTeacher.__proto__ = user
console.log(isTeacher.videpUpload);
console.log(isTeacher.email);

// modern method
Object.setPrototypeOf(isTeacher,user)
console.log(`I am new method ${isTeacher.email}`);

// remove empty space from all the string

const country = 'India    '
const capital = '    New Delhi'

String.prototype.removeSpace = function(){
    console.log(`This refer to ${this}`);
    return this.trim().length
}
const capitalFianl = capital.removeSpace()
console.log(capitalFianl);

// understanding this
const test = '   sumesh k sundaran'.removeSpace()
console.log(test);