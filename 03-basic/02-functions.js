// many argument can pass using ...(sprerad/rest operator)
function cartTotal(...total){
    return total
}
//console.log(cartTotal(100,200,300));

const school = {
    studentName: "Sumesh",
    age: 21
}

function passObj(myObj){
    console.log(`The student name is ${myObj.studentName} and the age is ${myObj.age}`); 
}
//passObj(school)

// passObj({
//     studentName : "Sali",
//     age: 22
// })

// array
const myArray = [100,200,300,400]
function returnSecondValue(getarray){
    return getarray[1]
}   
console.log(returnSecondValue(myArray));
console.log(returnSecondValue([10,20,30]));