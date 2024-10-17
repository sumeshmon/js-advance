function addTwoNum(num1,num2){
    return num1+num2
}
//console.log(addTwoNum(8,2));

function isLoggedIn(username){
    return `Hello ${username}, welcome back`
}
//console.log(isLoggedIn());

function isLoggedOut(username){
    if(username === undefined){
        console.log('Please enter your name');
    } else{
        return `Hi ${username} sorry, we have lost you`
    }
    
}
console.log(isLoggedOut());



