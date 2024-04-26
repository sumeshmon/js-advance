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
    }, 1000)
})

promiseThree.then(function(param){
    console.log(param);
})

