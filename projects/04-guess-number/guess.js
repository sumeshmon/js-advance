const randomNumber = (parseInt(Math.random() * 100 + 1)); 
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
        validateGuess(guess) 
    })
    
}
function validateGuess (guess){
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
            checkGuess(guess)
            displayMessage(`Game is over. Random number was ${randomNumber}`)
            endGame()
        } else{
            checkGuess(guess)
            displayMessage (guess)
        }
    }
   
}


function checkGuess(guess){
    // empty the value + update the array + calculate the remaining numbers
    

}

function displayMessage (message){
    // DOM manipulation

}

function endGame(){
    
}

function newGame (){

}

