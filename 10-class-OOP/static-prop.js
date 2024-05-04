class School{
    constructor (username){
        this.username = username
    }

    logMe(){
        console.log(`Hi ${this.username}, i am from User class`);
    }

    static createID(){
        return `123`
    }
}

class Teacher extends School{
    constructor(username,email, password){
        super(username) // super will call this 
        this.email = email
        this.password = password
    }
}
const student1 = new Teacher('Sumesh', '10th', 123)
console.log(student1.createID());