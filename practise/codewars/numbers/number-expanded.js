function expandedForm(num) {
    let parts = []
    let numToString = num.toString()
    let length = numToString.length
    for ( let i = 0; i < length; i++){
        let digit = numToString[i]
        console.log(`digit: ${digit} - length: ${length - 1}`);
        
        if (digit !== '0') {
            let placeValue = digit + "0".repeat(length - i - 1)
            parts.push (placeValue)
        }
        
    }
    return parts.join(' + ')
}
console.log(expandedForm(70304));
