class School {
    constructor(name,std,isMale){
        this.name = name
        this.std = std
        this.isMale = isMale
    }

    get name() {
        return `${this._name.toUpperCase()}123`
    }

    set name (val) {
        this._name = val
    }

}
 
const student1 = new School('sumesh',8,'no')
console.log(student1.name);