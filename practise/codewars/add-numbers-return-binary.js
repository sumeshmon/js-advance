function addBinary(a,b){
    // my way
    // let convertedA = Number(a)
    // let convertedB = Number(b)
    // let result = convertedA+convertedB
    // return result.toString(2)

    // shorten
    return Number((a+b)).toString(2)
    
}

console.log(addBinary('5','9'));
