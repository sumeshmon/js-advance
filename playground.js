const myArr = ['1','2','3','4','5','6','7','8']

const testForLoop = myArr.forEach ( (ele) => {
    if (ele >= 5 ){
        // console.log(ele);
        return console.log(ele);
        
    }
    
}) 
// console.log(testForLoop);

const testFilter = myArr.filter ( (elements) => elements >=5 )
console.log(testFilter);

