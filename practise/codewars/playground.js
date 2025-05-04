function alphabetPosition(text) {
    return text
        .toLowerCase()
        .split('')
        .filter( char => /[a-z]/.test(char))
        .map( char => char.charCodeAt(0) - 96)
}
input = "The sunset sets at twelve o' clock."
console.log(alphabetPosition(input));

// problem
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
