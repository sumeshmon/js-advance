function addTwoNum(num1,num2){
    return num1+num2
}
//console.log(addTwoNum(8,2));

function isLoggedIn(username = "name"){
    return `Hello ${username}, welcome back`
}
//console.log(isLoggedIn("Sumesh"));

function isLoggedOut(username){
    if(!username){
        console.log('Please enter your name');
    } 
    return `Hi ${username} sorry, we have lost you`
}
console.log(isLoggedOut());



