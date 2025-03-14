function sumMix(x){
   return x.reduce ( (acc,num) => acc + Number (num),0 )
   //return x.map(Number).reduce( (acc, num) => acc + num, 0 )   
    
}
console.log(sumMix([2,3,5,'10']));
