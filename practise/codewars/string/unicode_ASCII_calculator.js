function alphabetPosition(text) {

    const lowerText = text.toLowerCase()
    let result = []
    //console.log('a'.charCodeAt(0) + ' ' + 'z'.charCodeAt(0));

    for (let i = 0; i < lowerText.length; i++) {
      const charCode = lowerText.charCodeAt(i)
      if ( charCode >= 97 && charCode <=122){
        result.push(charCode - 96)
      }
    }
    return result.join(' ')
}
input = "The sunset sets at twelve o' clock."
console.log(alphabetPosition(input));

// problem
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
