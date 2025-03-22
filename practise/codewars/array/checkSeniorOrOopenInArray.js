function openOrSenior(data){
    let result = []
   for(let i=0; i<data.length;i++){
    let [age,handicap ] = data[i] // Destructure array
    if(age>=55 && handicap >7){
        result.push("Senior")
    }  else {
        result.push("Open")
    }

    
   }
   return result
    
}
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
console.log(openOrSenior(input));
