const requestURL = 'https://randomuser.me/api/'

const xhr = new XMLHttpRequest()
// console.log(typeof XMLHttpRequest); // its a function
// console.log(typeof xhr); // adding new key word converted in to object

xhr.open('GET', requestURL)
xhr.onreadystatechange = function(){
    // console.log(xhr.readyState); // to get all the states
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText) // if JSON.parse not used, it will consider as a string
        console.log(data.info);
    }
}

xhr.send()