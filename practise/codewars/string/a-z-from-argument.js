function longest(a,b) {
    const letteres = [... new Set ( (a+b))].sort( ).join('')
    console.log(typeof letteres);
    
    return letteres
}
console.log(longest('Xyaabbbccccdefww','xxxxyyyyabklmopq'));


// problam
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.