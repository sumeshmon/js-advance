const myArr = [1,2,3,4,5,6,7]

// normal function
myArr.filter( function(param){
    if(param > 2){
        console.log(param);
    }
})
// arrow function
const usingArrow = myArr.filter( (param)=> param > 2)
// console.log(usingArrow);