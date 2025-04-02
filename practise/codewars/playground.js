function comp(array1, array2){

  if (!array1 || !array2 || array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++){
    let squared = array1[i] * array1[i]

   let index = array2.indexOf(squared);
   console.log(index);
   

    if (index === -1) {
      return false; // If squared value not found, return false
    }
    array2.splice(index, 1); // Remove found value to prevent duplicate issues
  }
  return true;
}
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

console.log(comp(a,b));
