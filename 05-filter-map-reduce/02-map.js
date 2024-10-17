// ++++++++++++++ map +++++++++++

//Applies a function to each element of an array and returns a new array containing the results.

const myNum = [7,1,2,3,4]

const multiplyWithTwo = myNum.map( (param) => param * 2 ) 
// const multiplyWithTwo = myNum.filter((param) => param * 2) // using filter method will not get the values of multiplication
//console.log(multiplyWithTwo);

// trying with foreach, better use map instead of foreach
const usingForEach  = myNum.forEach( (val, index) => {
    console.log(`value is ${val} | index is: ${index}`);
    console.log(`modifyed ${myNum[index]}`);
    return myNum[index] = val * 2
    
})
console.log(myNum);

// chaining
const chainingMethod = myNum
                    .map( (param) => param * 2 )
                    .map ( (param) => param + 1)
                    .filter( (param) => param > 10 )
//console.log(chainingMethod);
 
