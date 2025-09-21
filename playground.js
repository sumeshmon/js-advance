const myname = [1,2,3,4,4,5,2]
let len = myname.length

const testLoop = function (){
    let result = []
    for ( let i = 0; i < len; i++){
        //result.push(myname[i])
        if( !result.includes(myname[i])  ){
            result.push(myname[i])
            
        }
    }   
    return result
}

console.log(testLoop());

