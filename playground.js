
const requestURL = 'https://randomuser.me/api/'

const promiseOne = new Promise ( (resolve,reject) => {
    setTimeout(() => {
        //console.log(`Promise one is completed`);
    }, 1000);
} )

promiseOne.then( () => {
    //console.log(`the task is completed`);
} )

const promiseTwo = new Promise ( (resolve, reject) => {
    setTimeout ( () =>{
        const user = {name:'sumesh', age:'40'}
        resolve(user)
    },1000)
})
promiseTwo.then( (user) => {
    //console.log(user);
    
})

const promiseThree = new Promise ( (resolve, reject) =>{ 
    setTimeout ( () => {
        let error = false
        

        let user = [
            {
                name:'sumesh', 
                age:20,
                kids: [{
                    name: 'Theertha'
                }]
            }
        ]
        
        if (!error){
            resolve (user)
        } else {
            reject('ERROR')
        }

    },1000)
})

promiseThree.then( (user) => {
    console.log(user);
    return  user
    
}).catch ( (error) => {
    console.log(error);
    
}).finally ( () =>{
    console.log(`Either the task is completed or failed`);
    
})