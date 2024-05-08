// returning child function, how ever the color is out side scope and this can access. This is closure.

function clickHandler(color){
    return function (){
        document.body.style.backgroundColor = `${color}`
       
    }
}

document.querySelector('.red').onclick = clickHandler('red')
document.querySelector('.blue').onclick = clickHandler('blue')