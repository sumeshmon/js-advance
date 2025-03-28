Object.defineProperty(
    String.prototype,  // Modifies the String prototype
    'toJadenCase',     // Defines a new method called 'toJadenCase'
    { 
      value: function toJadenCase() {  // The function that will be executed
        return this.split(' ')
        .map(  word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
                
      }
    }
  );

  console.log("how can mirrors be real if our eyes aren't real".toJadenCase());