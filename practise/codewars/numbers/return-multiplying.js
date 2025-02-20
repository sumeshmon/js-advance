function grow (x) {
    // using for
    let count = 1
    for ( let i = 1 ; i < x.length; i++) {   
        count *= x[i]
        
    }
    return count


    // using reduce
return x.reduce ( (a,n) => {
    return a * n
    
},1)

}
let myArray = [1, 2, 3, 4]
console.log(grow(myArray));

// problem
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24