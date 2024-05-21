// Function Definition (getData):

// The function getData takes two parameters:
// dataID: This is the identifier for the data being fetched.
// getNextData: This is an optional callback function to fetch the next set of data.
// Inside the function, setTimeout is used to delay the execution of the function by 2000 milliseconds (2 seconds).
// After the delay, it logs Data ${dataID} to the console.
// If getNextData is provided, it invokes getNextData() after logging the data.
// Function Invocation:

// getData(1, () => { getData(2); }):
// This calls getData with dataID set to 1 and a callback function.
// The callback function, defined as () => { getData(2); }, will call getData again with dataID set to 2 after the first data is logged.
// getData(2):
// This is called within the callback function of the first getData call.
// It will log Data 2 to the console after another 2-second delay.


// this is callback hell
function getData ( dataID, getNextData ){
    setTimeout( () => {
        console.log(`Data ${dataID}` );
        if (getNextData) {
            getNextData()
        }
    }, 2000)
}

getData(1, () => {
    console.log(`Getting data 2`);
    getData(2, () => {
        console.log(`Getting data 3`);
        getData(3)
    })
})
