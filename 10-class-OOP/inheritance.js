class School {
    constructor (username){
        this.username = username
    }
}

class Teacher extends School {
    constructor(username,std, marks){
        super(username)
        this.std = std
        this.marks = marks
    }
    addCource(){
        console.log(`${this.username} has joined new cource`);
    }
}


const student1 = new Teacher('Sumesh',6,100)
console.log(student1.addCource());