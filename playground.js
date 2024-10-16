const promiseOne = new Promise ( (resolve,reject) => {
    setTimeout(() => {
        console.log(`Promise one is completed`);
        resolve()
    }, 1000);
} )

promiseOne.then( () => {
    console.log(`the task is completed`);
} )