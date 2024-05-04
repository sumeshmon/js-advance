function User (username,isLoggedIn,loginCount) {
    this.username = username
    this.isLoggedIn = isLoggedIn
    this.loginCount = loginCount
    // console.log(this);
    // return this
}

const userOne = new User('sumesh',false,4)
const userTwo = new User('Sali',true,8)
// console.log(userTwo);


// instanceof
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
// The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. Its behavior can be customized with Symbol.hasInstance.

class School{
    constructor(studentName,std,rollno){
        this.nameOfStudent = studentName
        this.standard = std
        this.rollNo = rollno
    }
    encriptedRollNo(){
        return `${this.rollNo} and ${this.nameOfStudent.toUpperCase()} encripted Roll no`
    }
}

const tejas = new School('Tejas',6,44)
//console.log(tejas.encriptedRollNo());

// behind the scene  +++++++ using function +++++++

function SchoolOne (studentName, rollno, division){
    this.studentName = studentName
    this.rollno = rollno
    this.division = division
    SchoolOne.prototype.encriptedRollNo = function(){
        return `${this.rollno} and ${this.studentName.toUpperCase()} encripted Roll no`
    }
}

const theertha = new SchoolOne ('Theertha', 44, 9)
console.log(theertha.encriptedRollNo());