// use of this keyword
const user = {
    name : 'sumesh',
    age : 23,

    welcomeMessage: function(){
        console.log(`Welcome ${this.name}`);
        console.log(this);
    }
}
// user.welcomeMessage()
user.name = 'sali'
// user.welcomeMessage()
// console.log(this);

// +++++++++++++++++++++++++ //
// use of this keyword in function
function userdata(){
    const name = 'sumesh'
    console.log(this);
    console.log(this.name); // can't use this inside function, will get 'undefined'
}
// userdata()

// +++++++++++++++++++++++++++ //
// this keyword in arrow function
const userDetail = () => {
    const name = "Sumesh"
    console.log(this);
    console.log(this.name);
}
userDetail()

// ++++++++++++++++++++++++++//
// arrow function implicit return

const testArrow = (param1, param2) => (param1 + param2)
//console.log(testArrow(2,3));

const testObj = (test) => ({name: 'Sumesh'})

// console.log(testObj());

const testThis = function(){
    const name = 'sumesh'
    console.log(this.name);
}
testThis()
const thisTry = () =>{
    name:'Sumesh'
    console.log(this);
}
thisTry()