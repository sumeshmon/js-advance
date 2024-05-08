// returning child function, how ever the color is out side scope and this can access. This is closure.
const buttons = document.querySelectorAll('.buttons');
function clickHandler(color){
    return function (){
        document.body.style.backgroundColor = `${color}`
       
    }
}

buttons.forEach( function(button){
    button.addEventListener('click', function(e){
        const passingColor = (e.target.value);
        clickHandler(passingColor)();

    })
})

// document.querySelector('.red').onclick = clickHandler('red')
// document.querySelector('.blue').onclick = clickHandler('blue')

