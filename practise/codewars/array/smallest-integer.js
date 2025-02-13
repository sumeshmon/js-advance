function findSmallestInt(arr) {
    
    // using Math.min()
    // arr = Math.min(... arr)

    // using .reduce()
    //return arr.reduce ( (min, num) => {
      // return num < min ? num : min

    // how reduce is works
    //  34 < 15 = 15, 
    //  15 < 88 = 15, 
    //  15 < 2 = 2 , 
    //  2 < -9 = -9
   // })

    // using for loop
    let min = arr[0]
    
    for ( let i=1; i < arr.length; i++){
        console.log(min);
        
        if ( arr[i] < min){
            min = arr[i]
        }
        
    }
   return min

    // return arr;
  }
let myArr = [34, 15, 88, 2, -9]
console.log(findSmallestInt(myArr));


// problem
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.