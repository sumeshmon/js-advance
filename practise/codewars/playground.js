let myArr = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]

function testForLoop(data){
    data.forEach(element => {
        [a,b] = element
        console.log(`A is ${a} B is ${b}`);
        
        
    });
    
}

console.log(testForLoop(myArr));
