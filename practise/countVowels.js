

function countVowles (str) {
    let content = 'Functions & Methods | JavaScript Full Course'
    
    if(!str){
        console.log('Enter a valid string');
        return
    }

    const vowels = "aeiouAEIOU";
    let count = 0;

    for(let char of str){
        if(vowels.includes(char))
            count++
    }
    console.log({count});
    return count
    

}
countVowles('222a')