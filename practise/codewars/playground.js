function squareSum(...numbers) {
    // console.log( 2 ** 3);
    //console.log(Math.pow(2,3));
    
    
    let sum = 0
    numbers.forEach(num => {
    //  sum += Math.pow (num,2)
        sum += num ** 2
    });
    return sum
}
console.log(squareSum(1,2,2));
