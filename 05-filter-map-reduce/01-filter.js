// ++++++++++ trying to return using forEach ++++++++++++
const coding = ['javascript', 'typescript','react js','python']
// forEach function will not return. It will be undefined
const myRoadMap = coding.forEach( (param) => {
    //console.log(param);
    // return param // undefined
})
// console.log(myRoadMap);

// +++++++++++++ filter() +++++++++++
const mynum = [20,45,30,10,56,68]

//const result = mynum.forEach( (param) => param > 30 ) // using foreach can't return the values
//const result = mynum.filter( (param) => param > 30 ) // using foreach can't return the values
// console.log(result);

// +++++++++ using forEach ++++++++++
const temArray = []
mynum.forEach ( (param) => {
    if( param > 30){
        temArray.push(param)
        return temArray
    }
})
console.log(temArray);