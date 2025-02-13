function isIsogram (str){
    str = str.toLowerCase()
      
    let removeDuplicated = [... new Set (str)].join('')

    // testing new Set()
    // let removeDuplicated = new Set (str)
    // removeDuplicated = [... removeDuplicated]
    // console.log(removeDuplicated);    
    // test end
    return  removeDuplicated === str

}
console.log(isIsogram('moOse'));

// problem
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)