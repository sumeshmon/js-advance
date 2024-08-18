const userVal = document.querySelectorAll('.cta')

// comuter generated
const comGenerated = () => {
    const options = ['stone', 'paper', 'scissor']
    const randomIndex = Math.floor(Math.random() * 3)    
    return options[randomIndex] 
}

  
// comparison
const playGame = (userChoice) => {
    const choiceComputer = comGenerated()
    console.log(`User choice is ${userChoice} and Computer choice is ${choiceComputer}`);
    
    
}
playGame()
// taking user clicked value
userVal.forEach ( (values) => {
    values.addEventListener ('click', () => {
        const userChoice = values.getAttribute('id')
        //console.log(getIdValue);
        playGame (userChoice)        
    })   
    
})

