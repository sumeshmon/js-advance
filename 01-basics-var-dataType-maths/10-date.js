let myDate = new Date()
console.log(typeof myDate);
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());

let createdDate = new Date(2024,2,24)
//console.log(createdDate.toDateString());


let dateObj = myDate.toLocaleString('default' , {
    //day:'numeric',
    // weekday: 'long',
    // weekday: 'short',
    // weekday: 'narrow',
    // minute: '2-digit',
    // minute: 'numeric',
    year: 'numeric'
})
//console.log("date Obj > " + dateObj);