function getSum(a, b)
{
  let sum = a + b
   if (a === b){
    return `${a} (1 since both are same)`
   }
   return `${sum} (${a} + ${b} = ${sum})`
}
console.log(getSum(1,1));
console.log('<h1>Hello</h1>')