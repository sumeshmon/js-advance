// ++++++++++++++ Immediately Invoked Function Expressions IIFE ++++++++++++++++++

(function one (user){
    
    console.log('I am named IIFE');
    console.log(`I am ${user}`);
}('Sumesh'));


((name) => {
    console.log('i am without named IIFE');
    console.log(`I am ${name}`);
})('sali');

((mark) => {
    console.log(`mark is ${mark}`)
})(50)