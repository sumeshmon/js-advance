// taking user clicked value
const userVal = document.querySelectorAll('.cta')

userVal.forEach ( (values) => {
    values.addEventListener ('click', () => {
        const getIdValue = values.getAttribute('id')
        console.log(getIdValue);
        
    })
    
    
})