
// const promise = async () => {
//     try {
//         const response = await fetch('https://cat-fact.herokuapp.com/facts/');
//         // Check if the response is OK (status code in the range 200-299)
//         // if (!response.ok) {
//         //     throw new Error(`HTTP error! status: ${response.status}`);
//         // }
//         const data = await response.json();  // Parse the response as JSON      
//         console.log(data);
//     } catch (error) {
//         console.log('Error:', error);
//     }
// };
// promise();

function usingThen () {
    fetch('https://cat-fact.herokuapp.com/facts/')
    .then( (response) => {
        console.log(response.status);
        
        return response.json()
        
            
    })
    .then( (nextChain) => {
        console.log(nextChain);

        
    }) 
    .catch ( (error) => {
        console.log('Error !!!!', error);
        
    })
}

usingThen()
