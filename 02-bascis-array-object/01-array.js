//  refer mdn documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myArray = [1,2,3,4,5]

//console.log(myArray.length);
//myArray.push(100)
//myArray.pop() // remove the last element of an array
//myArray.unshift(200) // add an element in the begining of an array
//myArray.shift() // remove the first element of an array

//console.log(myArray.includes(210)); // check if any element is matching, the return value will be boolen
//console.log(myArray.indexOf(30)); // to get the position
//console.log(myArray.findIndex("20")); //instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

//console.log("A ", myArray);

const arr1 = myArray.slice(0, 2)
//console.log("Sliced", arr1);
//console.log("B ", myArray);

const arr2 = myArray.splice(0, 2)
console.log("Spliced", arr2);
//console.log("C", myArray);

const array1 = [-1, 5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 0;

console.log(array1.findIndex(isLargeNumber));

