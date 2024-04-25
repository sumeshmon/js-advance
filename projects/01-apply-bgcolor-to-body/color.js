const buttons = document.querySelectorAll('.buttons')
const body = document.querySelector('body')

buttons.forEach( function (param) {
    // console.log(param);
    param.addEventListener('click', function(e){
        // console.log(e);
        // console.log(e.target); 
        console.log(e.target.id); 
        switch (e.target.id) {
            case 'blue':
                body.style.backgroundColor = e.target.id
                break;
                
            case 'green':
                body.style.backgroundColor = e.target.id
                break;
            case 'red':
                body.style.backgroundColor = e.target.id
                break;
           
            default:
                body.style.backgroundColor = 'yellow'
                break;
        }
        
    })
} )
