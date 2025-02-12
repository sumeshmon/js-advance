split('') : Converts the string into an array of characters. <br>
reverse() : Reverses the array.<br><br>

.join() : convert an array into a string <br>
    .join(' ') :	"H e l l o" (with spaces)<br>
    .join() : "H,e,l,l,o" (with commas)<br>
    .join('') : "Hello" (no separator)<br><br>
test() method in RegExp instances searches for a match between a regular expression and a string. It returns true if there is a match and false if there is not.

.slice() : returns a new array, leaving original unchanged.<br>

.localeCompare() : When sorting an array of strings, we use .localeCompare() inside the sort() method.<br>
Math.abs : returns the absolute value of a number, meaning it removes the negative sign if there is one.<br>

.includes() : method checks if a string or array contains a specific value. It returns true if the value is found, otherwise false.<br>

.indexOf() : method searches for a value in a string or array and returns its index (position). If the value is not found, it returns -1.<br>

.endsWith() : method in JavaScript is used to check whether a string ends with a specified substring <br>

.trim() : removes any extra spaces at the beginning or end of the resulting string.<br><br>

.toString() : convert to a string<br>
.toString(2) : convert number to binary<br><br>

parseInt("123") // 123<br>
parseInt("42px") // 42 (ignores non-numeric characters after numbers)<br>
parseInt("007") // 7 (removes leading zeros)<br>
parseInt(var, 2)  : convert binary to a number<br>

.replace(searchValue, replaceValue) : <br>
    searchValue → The part of the string to be replaced (can be a string or a regular expression).<br>
    replaceValue → The new string or a function that determines the replacement.
<br><br>
    When to Use .replace()?<br>
    Replace a word or phrase in a string<br>
    ✅ Modify multiple occurrences using regex (/g)<br>
    ✅ Transform matched values using a function<br>
    ✅ Reformat text using capture groups ($1, $2, ...)<br><br>
    
...new Set(someString) : remove duplicate characters from a string while keeping their original order<br>

.at(-1)  / .length(-1): returns the last character of the string. <br>

.sort() :  sorts the elements of an array in place and returns the sorted array<br>
    ✅ By default, .sort() sorts strings alphabetically (A-Z).<br>
    ✅ For numbers, always use (a - b) for correct sorting.<br>
    ✅ You can use localeCompare() for case-insensitive sorting.<br>
    ✅ It modifies the original array, so use .slice() if you need a copy.<br><br>


.filter() : Removes elements from an array based on a condition (returns a filtered array).<br>
.map(): Transforms each element in an array and returns a new array.<br>
.reduce() :	Condenses an array into a single value (sum, product, object, etc.).<br>
