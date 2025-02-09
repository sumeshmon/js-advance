split('') : Converts the string into an array of characters.
reverse() : Reverses the array.
.join(' ') :	"H e l l o" (with spaces)
.join() : "H,e,l,l,o" (with commas)
.join('') : "Hello" (no separator)
.trim() : removes any extra spaces at the beginning or end of the resulting string.

.toString() : convert to a string
.toString(2) : convert number to binary

parseInt("123") // 123
parseInt("42px") // 42 (ignores non-numeric characters after numbers)
parseInt("007") // 7 (removes leading zeros)
parseInt(var, 2)  : convert binary to a number

.replace(searchValue, newValue) : replace with searchValue to  newValue
.at(-1)  / .length(-1): returns the last character of the string. 
.sort() :  is a method for arrays
Math.abs : returns the absolute value of a number, meaning it removes the negative sign if there is one.

.includes() : method checks if a string or array contains a specific value. It returns true if the value is found, otherwise false.
.indexOf() : method searches for a value in a string or array and returns its index (position). If the value is not found, it returns -1.

.filter() : Removes elements from an array based on a condition (returns a filtered array).
.map(): Transforms each element in an array and returns a new array.
.reduce() :	Condenses an array into a single value (sum, product, object, etc.).