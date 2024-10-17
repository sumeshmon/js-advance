const userVal = document.querySelectorAll('.cta')
const display = document.querySelector('.result')
// comuter generated
const comGenerated = () => {
    const options = ['stone', 'paper', 'scissor']
    const randomIndex = Math.floor(Math.random() * 3)    
    return options[randomIndex] 
}
const drawGame = () =>{
    display.innerHTML = 'Match draw'
}
// comparison
const playGame = (userChoice) => {
    const choiceComputer = comGenerated()
    console.log(`User choice is ${userChoice} and Computer choice is ${choiceComputer}`);
    if (choiceComputer === userChoice){
        drawGame()       
    }
   
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

