const user = {
    name: 'Sumesh',
    age: 18,
    isLoggedIn: false
}

// destructuring object
const {name} = user
console.log(name);
// const {isLoggedIn} = user
const {isLoggedIn: login} = user

// console.log(isLoggedIn);
console.log(login);