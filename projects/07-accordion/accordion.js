let accHead = document.querySelectorAll('.accordion-header')
let accContents = document.querySelectorAll('.accordion-content')

accHead.forEach( (ele) => {
    ele.addEventListener('click', () => {      
        let parentHead = ele.parentElement
        let childContent = parentHead.querySelector('.accordion-content')

        // Toggle 'active' for the clicked content
        childContent.classList.toggle('active')

        // Add 'selected' class to the clicked header
        ele.classList.toggle('selected');

        accContents.forEach ( (contents) => {
            if(contents !== childContent){
                contents.classList.remove('active')
            }
        })

        // to remove the selected class on clicking on other elements
        accHead.forEach ( (header) =>{
          if(header !== ele){
            header.classList.remove('selected')
          }
          

        })
    })
})