//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

const { log } = require("console");

// promise using with varibale
const promiseOne = new Promise(function (resolve,reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async one is started');
        // if resolve is not used here the below log will not display. 
        // .then() is connected with resolve()
        resolve()
    }, 1000);
})
promiseOne.then(function(){
    console.log('Promise one is compeleted');
})

// ++++++++++++++++++++++++++++ //

// promise using with out varibale
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async two is started');
        resolve()
    },1000)
}).then(function(){
    console.log('Promise two is compeleted');
})

//  ++++++++++ promise : passing data through .resolve() and getting in .then() +++++++++++

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            username : 'sumesh',
            password : '123456'
        })
        console.log('Async threee is started')
    }, 1000)
})

promiseThree.then(function(param){
    console.log(param);
})

// ++++++++ promise : chaining and usage of reject and catch +++++++++++

const promiseFour = new Promise(function(resolve,reject){
    let error = false
    setTimeout(function(){
        if(!error){
                resolve({name:'sumesh from promise 4 :-)', email:'test@promiseFour.com'})
            } else{
                reject('ERROR: Something went wrong')
            }
    },1000)
    
})

// chaining
promiseFour.then(function(param){
    // console.log(param)
    return param.name
}).then(function(name){
    console.log(name);
}).catch(function(error){
    console.log(error);
}).finally( function(){
    console.log('finally executed or rejected');
})


// using async

async function promiseSix(){
    try {
        const response = await promiseSix
        console.log(response);
        console.log('asny sucess');
    } catch (error) {
        console.log(error);
        console.log('asny fail');
    }
}
// promiseSix()

// asnc using real api
async function promiseSeven (){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
        console.log('Promise 7 executed');
    } catch (error) {
        console.log('ERROR : Something went wrong  with promose Seven', error);
    } 
}
// promiseSeven()

//  using .then() and .catch format
fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response) {
    console.log(response);
    return response.json()  
})
.then((data) =>{
    console.log(data);
})
.catch(function(error) {
    console.log('Oops! Something went wrong using .then() and .catch()', error);
})
.finally(function() {
    console.log('Finally block executed or rejected');
});

