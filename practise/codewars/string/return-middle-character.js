function getMiddle(s) {
    charCount = Math.floor(s.length / 2)
    // if (s.length % 2 === 0){
    //     return s[charCount - 1] + s[charCount]       
        
    // } 
    // return s[charCount]

    // short
    return s.length % 2 === 0 ? s[charCount - 1] + s[charCount] : s[charCount]
     
}
console.log(getMiddle('hello'));

// problem
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.