// generate ramdom color
 
const randomColor = function (){
    let hex = '012346789ABCDEF'
    let color = '#'

    for (let index = 0; index < 6; index++) {
        color += hex[Math.floor(Math.random() * 16)] 
    }
    return color 
}
// console.log(randomColor()); 
let intervelID
const startChangingColor = function (){
    function changeBgSetInterval() {
        document.querySelector('body').style.backgroundColor = randomColor()
    }
    intervelID = setInterval(changeBgSetInterval, 1000);
    
}
const stopChangingColor = function (){
    clearInterval(intervelID)
}

document.querySelector('.start').addEventListener('click', startChangingColor);
document.querySelector('.stop').addEventListener('click', stopChangingColor);
