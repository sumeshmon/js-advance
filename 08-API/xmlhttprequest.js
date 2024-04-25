const requestURL = 'https://randomuser.me/api/'


const xhr = new XMLHttpRequest()
// console.log(typeof XMLHttpRequest); // its a function
// console.log(typeof xhr); // adding new key word converted in to object

// ++++++++++++++ open is sendig and receiving the request
xhr.open('GET', requestURL) //sending the request
// console.log('sended?') // to test requested sended or not
// console.log(xhr.readyState); // now the state will be 1

// +++++++++++ onreadystatechange is using to get all the state with function.
xhr.onreadystatechange = function(){
    // console.log(xhr.readyState); // to get all the states
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText) // if JSON.parse not used, it will consider as a string
        const getEmail = data.results[0].email
        // console.log(data.results[0].email);
        const appenEmail  = document.querySelector('.email')
        const button = document.querySelector('.button')

        //normal function
        button.addEventListener('click', function(){
            appenEmail.innerHTML = getEmail
        })
        function email (){
            appenEmail.innerHTML = getEmail
        }
        button.addEventListener('click', email)
        // trying with referance
    }
}

xhr.send() 