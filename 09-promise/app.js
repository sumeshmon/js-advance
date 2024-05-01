// fetch('https://jsonplaceholder.typicode.com/users')
// .then(function(response) {
//     console.log(response);
//     return response.json()  
// })
// .then((data) =>{
//     console.log(data[2].email);
// })
// .then((data1) =>{
//     //console.log(data1.length);
// })
// .catch(function(error) {
//     console.log('Oops! Something went wrong using .then() and .catch()', error);
// })
// .finally(function() {
//     console.log('Finally block executed or rejected');
// });




// +++++++++++++ using async method +++++++++++++++++

async function getDetailsFromApi() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data[2]);
    } catch (error) {
        console.log('Oops! Something went wrong using async method', error);
    }
   
}


getDetailsFromApi()