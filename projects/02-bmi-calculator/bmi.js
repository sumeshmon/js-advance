const form = document.querySelector('form')

// this will give you empty, always keep inside after sumitting
//const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('.result')
    
   if (height === '' || height < 0 || isNaN(height)) {
       result.innerHTML='Please enter height'
   } else if (weight === '' || weight < 0 || isNaN(weight)) {
    
   } else{
    const bmi = height/weight
    result.innerHTML = bmi.toFixed(2)
   }

    
})