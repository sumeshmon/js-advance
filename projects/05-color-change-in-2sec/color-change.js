const colorChange = (p1,p2) => {
    document.querySelector('body').style.backgroundColor = p1,p2
}


start = setInterval(colorChange, 1000,'red','blue');

document.querySelector('.stop').addEventListener('click', function(){
    clearInterval(start)
})