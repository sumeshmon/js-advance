function user (username){
    this.username = username
    console.log('i am user');
}

function userdetails(username, email, password){
    // user() // calling the other function, but the value can't print
    user.call(this,username) // calling from another function
    
    this.email = email
    this.password = password
    

}

const newObj = new userdetails('sumesh', 'aaa@aaa.com', 123) 
console.log(newObj);