// Reduces an array to a single value by applying a function to each element of the array and combining the results.
const myVal = [1,2,3,4]

const myReduce = myVal.reduce( function (accumulator,currentValue) {
    //console.log(`accumulator value is ${accumulator} and currval ${currentValue}` );
    return accumulator + currentValue
},0)
// const myReduce = myVal.reduce( (accumulator,currentValue) => (accumulator + currentValue), 0 ) // using arrow
//console.log(myReduce);



//  +++++++++ array with reduce to get all the total rs of my cart
const userCart = [
    {
        product : 'AC',
        price : 30000
    },
    {
        product : 'TV',
        price : 25000
    },
    {
        product : 'Washing machine',
        price : 15000
    },
    {
        product : 'Samsung A32',
        price : 18000
    }
]
// using arrow function
// const userTotal = userCart.reduce ( (accum,item) => (accum + item.price),0) 

// using normal function
const userTotal = userCart.reduce( function(acc,item){
    console.log(`Accum :> ${acc} - This is item ${item.price}`);
    return acc + item.price
},0)
console.log(`Your total bill is ${userTotal}`);