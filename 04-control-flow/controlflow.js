// comparision operators
// <, >, <=, >=, =, ==, ===, !=, !==
const temprature = 40

if (temprature < 50){
    console.log(` Temprature is more than 50`);
}

// scope
const score = 200
if (score > 100){
    const perfomance = 'super'
    console.log(`perfomance is ${perfomance}`);
}
// console.log(`perfomance is ${perfomance}`); //out of scope
