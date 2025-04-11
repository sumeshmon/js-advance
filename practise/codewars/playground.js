function duplicateEncode(word){
    let lower = word.toLowerCase();
    result = ''
    for (let i = 0; i < word.length; i++){
        let char = word[i]
        console.log(`indexOf ${lower.indexOf(char)} - lastIndexOf ${lower.lastIndexOf(char)}`);
        
        if (lower.indexOf(char) === lower.lastIndexOf(char)) {
            result += '(';
        } else {
            result += ')';
        }
    }
    return result
}
console.log(duplicateEncode("diin"));

 