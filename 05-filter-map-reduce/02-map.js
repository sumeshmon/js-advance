// ++++++++++++++ map +++++++++++

//Applies a function to each element of an array and returns a new array containing the results.

const myNum = [1,2,3,4,5,6,7,8,9,10]

const multiplyWithTwo = myNum.map( (param) => param * 2 ) 
// const multiplyWithTwo = myNum.filter((param) => param * 2) // using filter method will not get the values of multiplication
//console.log(multiplyWithTwo);

// trying with foreach
const usingForEach  = myNum.forEach( (param, index) => {
    console.log(`param ${param} | index : ${index}`);
    console.log(`modifyed ${myNum[index]}`);
    return myNum[index] = param * 2 
    
})
console.log(myNum);

// chaining
const chainingMethod = myNum
                    .map( (param) => param * 2 )
                    .map ( (param) => param + 1)
                    .filter( (param) => param > 10 )
//console.log(chainingMethod);
 
