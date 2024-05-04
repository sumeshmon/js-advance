class School {
    constructor (username){
        this.username = username
    }
    logMe(){
        console.log(`USER NAME IS ${this.username}`);  
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
// console.log(student1.addCource());
// student1.addCource()

const student2 = new Teacher('Sali')
student2.addCource()

console.log(student1 === student2);

console.log(student2 instanceof Teacher);