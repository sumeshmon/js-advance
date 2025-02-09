function getCount (str){
    let vowels = 'aeiou'
    //return str.split('').filter( (char => vowels.includes(char))).length
    
    // using normal function
    return str.split('').filter ( function (char){
        
        return vowels.includes(char)
    } ).length
}
console.log(getCount('sdfaaadgdaffeiou'));

// problem
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.