const a = 10
let b = 20
var c = 30

if(true){
    let b = 300 
    var c = 300   
    const a = 3000
    // console.log(a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);

// scope in nested
function one(){
    const user = "Sumesh"
    const email = "sdfsffs@dfds.com"
    //console.log(email);
    function two(){
        const email = "aaa@google.com"
        console.log(user);
        console.log(email);
    }
    two()
   console.log(email);
}
// one()

// scope in if else
if(true){
    const username = "sumesh"
    const email = 'test@test.com'
    if(username === 'sumesh'){
        const email = "aaaa@gmail.com"
        //console.log(email + ' '+ username);
        //console.log(username);
    }
    //console.log(email);
    // console.log(username);
}

// hoisting

console.log(addone(5));
function addone(value){
    return value + 1
}


console.log(addOne(2));
const addOne = function(value){
    return value + 1
}
