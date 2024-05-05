class School{
    constructor (username,gender){
        this.username = username
        this.gender = gender
    }

    logMe(){
        console.log(`Hi ${this.username}, i am from User class`);
    }

    static createID(){
        return `123`
    }
}

class Teacher extends School{
    constructor(username,gender,email, password){
        super(username,gender) // super will call this 
        this.email = email
        this.password = password
    }
}
const student1 = new Teacher('Sumesh','Male', '10th', 123)
console.log(student1);
console.log(student1.createID()); // will get error because it declared as static