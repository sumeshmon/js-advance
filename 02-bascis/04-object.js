const myObj = new Object
const myObj1 = {}

console.log(myObj);
console.log(myObj1);

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
console.log(regularUser.fullName.petName);