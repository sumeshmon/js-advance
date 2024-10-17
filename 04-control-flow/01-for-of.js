// for of
const marks = [10,20,56,45,30]

for (const i of marks) {
    // console.log(`marks are ${i}`);  
}

let greetings = 'Hello World!'
for (let letters of greetings) {     
    if (letters == ' ') {
        // break
        continue
    }  
    console.log(letters); 
}

// ++++++ map +++++

const marksMap = () =>{
    const worldName = new Map()
    worldName.set('IN', 'India')
    worldName.set('US', 'USA')
    worldName.set('FR','France')
    worldName.set('IN', 'India')
    // console.log(worldName);
    // [key,val] - destructure of an array
    for (const [key,val] of worldName) {
        // console.log(key, '>:', val);
    }
}
//marksMap()
