function descendingOrder (n) {
    // let isNegative = n < 0; // Check if it's negative
    // let sortedDigits = Math.abs(n).toString().split('').sort((a, b) => b - a).join('');
    
    // return isNegative ? -Number(sortedDigits) : Number(sortedDigits)

    // another method
    // return Number(n.toString().split('').sort( (a,b) => b-a).join(''))
   
    return Number(String (n) .split('').sort ( ( a,b) => b-a).join(''))

    // testing parseInt
    // let test = parseInt(n)
    // console.log(typeof test);
    
    // return parseInt(n)
}

console.log(descendingOrder(5665665));

// problem
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.