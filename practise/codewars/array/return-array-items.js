function likes(names) {  
    let count = names.length  
    if ( count === 0){
        return "no one likes this"
    } else if (count === 1){
        return `${names} likes this`
    } else if (count === 2) {
        return `${names[0]} and ${names[1]} like this`
    } else if (count === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    }
    return `${names[0]}, ${names[1]} and ${count - 2} others like this`;
}
names = ["Alex", "Jacob", "Mark", "Max"]
console.log(likes(names));
