const arraySheep = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

function countSheeps (param){
    // console.log(param.length);
    
    let count  = 0
    
    // for (let i = 0; i < param.length; i++){
    //     if(param[i] === true){
    //         count++
    //     }  
    // }
    // return count 

    // param.forEach(element => {
    //     if (element){
    //         count++
    //     }
    // });
    // return count


    return param.filter(Boolean).length;
}
console.log(countSheeps(arraySheep));
