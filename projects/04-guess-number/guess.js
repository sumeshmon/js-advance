let randomNumber = (parseInt(Math.random() * 100 + 1)); 
const button = document.querySelector('.button')
const userInput = document.querySelector('.userInput')
const previousGuess = document.querySelector('.previousGuess')
const guessRemaining = document.querySelector('.guessRemaining')
const lowOrHi = document.querySelector('.lowOrHi')
const result = document.querySelector('.result')

const p = document.createElement('p')

let preGuess = []
let numGuess = 1
let playGame = true


if(playGame){
    button.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        // console.log(guess);
        validatingUserInput(guess) 
    })
    
}
function validatingUserInput (guess){
    // console.log(guess);
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if (guess < 1) {
        alert('Please enter number above 0')
    }
    else if (guess > 100) {
        alert('Please enter number below 100')
    } else{
        preGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game is over. Random number was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkingUserInputWithRandomNumber(guess)
        }
    }
   
}


function checkingUserInputWithRandomNumber(guess){
    // empty the value + update the array + calculate the remaining numbers
    if (guess === randomNumber) {
        displayMessage(`You guessed right!`)
        endGame()
    } else if (guess < randomNumber){
        displayMessage(`Number is too low`)
    } else if (guess > randomNumber){
        displayMessage(`Number is too high`)
    }
}
function displayGuess (guess){
    // DOM manipulation
    userInput.value = ''
    previousGuess.innerHTML += `${guess},` 
    numGuess++
    guessRemaining.innerHTML = 11 - numGuess
}
function displayMessage (message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h3 id="newGame">Start New Game</h3>`
    result.appendChild(p)
    playGame = false
    newGame()
}

function newGame (){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = (parseInt(Math.random() * 100 + 1))
        preGuess = []
        numGuess = 1
        userInput.removeAttribute('disabled','')
        result.removeChild(p)
        playGame = true
        
    })
}

