function getCount (str){
    // return str.split('').filter( (char => 'aeiou'.includes(char)).length);
    
    // using normal function
    return str.split('').filter ( function (char){
        let vowels = 'aeiou'
        return vowels.includes(char)
    } ).length
}
console.log(getCount('sdfaaadgdaffeiou'));

// problem
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.