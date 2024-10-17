// +++ Can't chage Math.PI property because it is already defined under c++ core and not changable. 
// console.log(Math.PI);
Math.PI = 10
// console.log(Math.PI);
//console.log(Object.getOwnPropertyDescriptor(Math,'PI')); // to get the properties key and values

// Change properties in own object
const school = {
    student : 'sumesh',
    std : 6,
    isMale: true,
    teacher: function(){
        console.log(`Teacher is available`);
    }
}
// console.log(Object.getOwnPropertyDescriptor(school,'std'));// check the properties and values of and object and its properties

// +++ changing the properties of an object property
Object.defineProperty(school,'isMale',{
    // writable: false,
    enumerable: false
})
//console.log(Object.getOwnPropertyDescriptor(school,'student'));

// iterable 
for (let [key,value] of Object.entries(school)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
    
}






