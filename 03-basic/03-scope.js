const a = 10
let b = 20
var c = 30

if(true){
    let b = 300    
    //console.log(b);
    
}
//console.log(a);
//console.log(b);

// scope in nested
function one(){
    const user = "Sumesh"
    //const email = "sdfsffs@dfds.com"
    //console.log(email);
    function two(){
        const email = "aaa@google.com"
        console.log(user);
    }
    two()
   
}
//one()

// scope in if else
if(true){
    const username = "sumesh"
    if(username === 'sumesh'){
        const email = "aaaa@gmail.com"
        //console.log(email + ' '+ username);
        //console.log(username);
    }
    //console.log(email);
    //console.log(username);
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
