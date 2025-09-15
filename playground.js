const myname = [1,2,3,4,4,5,2]
let len = myname.length

const testLoop = function (){
    let result = []
    for ( let i = 0; i < len; i++){
        for ( let j = 0; j < i; j++){
            
            result += '*'
        }
        result += '+\n'
    }
    return result
}


console.log(testLoop());

