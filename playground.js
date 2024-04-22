let color = ["red","blue","green","yellow","gray"]
function testMathRandom(){
    return Math.random()
}
let result = testMathRandom()
// console.log(result*color.length) 

// testing JS call stack
const testCallstack1 = () =>{
    console.log('1');
}
const testCallstack2 = setTimeout(() => {
    console.log('2');
}, 0);

const testCallstack3 = () =>{
    console.log('3');
}

testCallstack1();
testCallstack3()