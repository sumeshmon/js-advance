// split(''): Converts the string into an array of characters.
// reverse(): Reverses the array.
// join(''): Joins the array back into a string.
function solution(str) {
    // console.log(typeof str);
    // const checkStr = str.split('')
    // console.log(checkStr);
    // checkStr.reverse()
    // console.log(checkStr);
    // const reverse = checkStr.join('')
    // console.log(reverse);
    return str.split('').reverse().join('')
}
  
// console.log(solution('dlrow'));

// using loop
// function solution1(str){
//     let revised = ''    
//     for (i = str.length - 1; i >= 0; i--){
//         revised += str[i]
//     }
//     return revised
// }
// console.log(solution1('dlrow'));

// split(''): Converts the string into an array of characters.
// reduce: Iterates through the array and builds the reversed string by prepending each character.
function solution2(str){
    return str.split('').reduce((reverse,char) => char + reverse, '');
}

// console.log(solution2('dlrow'));


// string to number
function numberToString (str){
    // return  str.toString()
    // return typeof `${str}`
    return String(str)
}
// console.log(numberToString(123456));

function makeNegative(str){
    // return str < 0 ? str : -str
    return -Math.abs(str);
    // if (str < 0) {
    //     return str
    // } else {
    //     return -str
    // }
    
}
console.log(makeNegative(-60));

