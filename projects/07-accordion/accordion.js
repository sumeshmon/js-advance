const panelBody = document.querySelectorAll('.body');
const paneltitle = document.querySelectorAll('.title');

panelBody.forEach(function(element) {
  element.style.display = 'none';
});
paneltitle.forEach ( function (element, index){
    element.addEventListener('click', function(){
        panelBody.forEach(function(element) {
            element.style.display = 'none';
          });

        // Show the corresponding panel body
        panelBody[index].style.display = 'block';
    })
})