const myObj = new Object
const myObj1 = {}

//console.log(myObj);
//console.log(myObj1);

const regularUser = {
    email : "user@user.com",
    fullName: {
        petName : {
            firstName : "Subi",
            lastName : "mon"
        },
        originalName : {
            firstName: "Sumesh",
            lastName : "K Sundaran"
        }
    }
}
//console.log(regularUser.fullName.petName);

const obj1 = {a:1, b:2, c:5}
const obj2 = {g: 3, b:4}

const returntarget = Object.assign({}, obj1,obj2)
// console.log(returntarget);

// console.log(returntarget === obj1);
const obj3 = {...obj1, ...obj2}
console.log(obj3);
// console.log(obj3 === obj2);


const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

//const returnedTarget = Object.assign({}, target, source);

//console.log(returnedTarget);
// Expected output: Object { a: 1, b: 4, c: 5 }
console.log(Object.keys(regularUser.fullName));
//console.log(Object.values(regularUser.fullName));
console.log(regularUser.hasOwnProperty('email'));