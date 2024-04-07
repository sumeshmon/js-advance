// Reduces an array to a single value by applying a function to each element of the array and combining the results.
const myVal = [1,2,3,4,5,6]

const myReduce = myVal.reduce( function (accumalator,currentValue) {
    console.log(`Accumalator value is ${accumalator}`);
    return accumalator + currentValue
},0)
// const myReduce = myVal.reduce( (accumalator,currentValue) => (accumalator + currentValue), 0 ) // using arrow
console.log(myReduce);
