// with object
const car = {
    bmw : 'Volxwagon',
    alto: 'Suzuki',
    brio : 'Honda'
}
for (const key in car) {
   //console.log(`${key} :> ${car[key]}`);
}


// array
const bikes = ['Fassino','Ntorq']
for (const key in bikes) {
    //console.log(key);
}

// Best example 

const family = {
    father : 'sumesh',
    mother : 'sali',
    kid1 : 'theertha',
    kid2 :'tejas'

}

// The forEach method is used for iterating over elements of an array, but it doesn't work directly with objects like family. However, you can use Object.entries() to convert the object into an array of key-value pairs and then use forEach on it. Here's how you can do it:

// Object.entries(family).forEach(([key, value]) => {
//     console.log(`${key} is ${value}`);
// });


// To iterate over an object using destructuring in a for...of loop, you need to convert the object into an iterable form. One way to do this is by using Object.entries() to convert the object into an array of [key, value] pairs. Here's the corrected version of your code:

for (const [key, value] of Object.entries(family)) {
    console.log(`${key} is ${value}`);
}


// for (let key in family) {
//     console.log(`family member ${key} > ${family[key]}`);
// }

