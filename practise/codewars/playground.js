function understandLoop (){
    for (let i = 0; i <=10; i++){
        let star = '*'

        for (let j = 1; j <= i; j++){
           star += '*'
        }
        console.log(star,i);
        
    }
}
understandLoop()