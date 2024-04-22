document.getElementById('images').addEventListener('click', (e) =>{
    //console.log('ul clicked');
},false)
document.getElementById('sun').addEventListener('click', (e) =>{
    //e.stopPropagation()
    //console.log('Sun clicked');
},false)

document.getElementById('github').addEventListener('click', function(e){
    e.preventDefault()
    //console.log('going to github');
})

// ++++++++++++ removing elements +++++++++++++

document.getElementById('images').addEventListener('click', (e) =>{
    console.log(e);
    // console.log(e.target.id);
    // console.log(e.target.tagName); 
    if (e.target.tagName === 'IMG') {
        let removeIt = e.target.parentNode.parentNode
        // console.log(removeIt);
        // removeIt.remove() // The issue is if clicked in li it will remove all
    }
    
},false)