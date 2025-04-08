split('') : Converts the string into an array of characters. <br>
[...variable] : spread operator (...) allows you to expand an iterable (like an array, string, or object) into individual elements.
<br>
When to Use Which?<br>
Use Case	Method<br>
✅ Basic character splitting	Either [...word] or word.split('')<br>
✅ Performance on large strings	let letters = [...word] (faster)<br>
❌ Handling emojis & special Unicode	Use Array.from(word) instead<br>

<br><br>
reverse() : Reverses the array.<br>

.join() : convert an array into a string <br>
    .join(' ') :	"H e l l o" (with spaces)<br>
    .join() : "H,e,l,l,o" (with commas)<br>
    .join('') : "Hello" (no separator)<br><br>
    

.slice() : to extract a portion of an array or string without modifying the original.<br><br>

Math.abs : returns the absolute value of a number, meaning it removes the negative sign if there is one.<br>
Math.min() : returns the smallest number from a set of numbers.<br>
Math.max() : returns the largest number from a set of numbers.<br>
Math.floor() : is a JavaScript function that rounds a number down to the nearest integer. <br>
Math.ceil() : rounds a number up to the nearest integer.  console.log(Math.ceil(4.2)); // Output: 5<br>
Math.pow(2, 3): 2 * 2 * 2 same as (2 ** 3) <br> Means it will take index and multiple live 2 * 2 * 2 = 8 <br><br>

Array.isArray(value) : checks whether a given value is an array. It returns true if the value is an array and false otherwise<br>
console.log(Array.isArray([1, 2, 3]));  // true <br>
console.log(Array.isArray("hello"));    // false<br><br>

map(Number) : is a shorthand for converting all elements of an array to numbers.<br>

.includes() : method checks if a string or array contains a specific value. It returns true if the value is found, otherwise false. <br>

.indexOf() : method searches for a value in a string or array and returns its index (position). If the value is not found, it returns -1.<br>

repeat() :  repeating a string a specified number of times. It does not modify the original string but returns a new one. Works only on strings, not arrays. <br>

const indent = " ".repeat(4);<br>
console.log(indent + "Indented text");<br>
// Output: "    Indented text"<br>

console.log("hello ".repeat(3));<br>
// Output: "hello hello hello "<br><br>

.endsWith() : method in JavaScript is used to check whether a string ends with a specified substring <br>
console.log(str.endsWith("world")); // true <br>

.trim() : removes any extra spaces at the beginning or end of the resulting string.<br><br>

.toString() : convert to a string<br>
.toString(2) : convert number to binary<br><br>
.length : on the string to get the number of characters (digits). Not numbers. <br>.length works on strings and arrays, but not on numbers.<br> Numbers are not sequences of digits; they are stored as numeric values, not as individual characters.

<br><br>
Number.isInteger() - Number.isInteger(value) checks if a given value is an integer (whole number).<br>
Key Features of Number.isInteger()<br>
✅ Only returns true for actual integers<br>
❌ Does not convert strings (unlike parseInt())<br>
❌ Returns false for NaN, Infinity, and decimals<br><br>

Math.sqrt(x) returns the square root of a number x<br> Math.sqrt() works on numbers, not arrays!<br><br>
How Math.sqrt() Works<br>
If x is a perfect square, it returns an integer.<br>
If x is not a perfect square, it returns a decimal (floating-point number).<br>
If x is negative, it returns NaN (Not a Number).<br><br>

The parseInt() function is used to convert a string into an integer.<br>
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
    
...new Set(someString) : Creates a Set and immediately spreads it into an array. This method is often used to remove duplicates from an array.<br>

new Set() : creates a Set object, which stores unique values.No duplicates are allowed in a Set()<br>

let setExample = new Set([1, 2, 2, 3, 4, 4]);
console.log(setExample); // Output: Set { 1, 2, 3, 4 }
console.log(setExample.size); // Output: 4
<br>
Set objects don't have array methods like .map() or .filter(), so sometimes, you need to convert them to an array.
<br><br>

.at(-1)  / .length(-1): returns the last character of the string. <br>

.sort() :  sorts the elements of an array in place and returns the sorted array<br>
    ✅ By default, .sort() sorts strings alphabetically (A-Z).<br>
    ✅ For numbers, always use (a - b) for correct sorting.<br>
    ✅ You can use localeCompare() for case-insensitive sorting.<br>
    ✅ It modifies the original array, so use .slice() if you need a copy.<br>

.localeCompare() : When sorting an array of strings, we use .localeCompare() inside the sort() method.<br>

case sensitivity : fruits.sort((a, b) => a.localeCompare(b, "en", { sensitivity: "case" })) <br>
    Case-Sensitive Sorting > sensitivity: "case"<br>
    Ignoring Accents (diacritics) : sensitivity: "base" <br>
    
numbers : numbers.sort((a, b) => a.localeCompare(b, "en", { numeric: true }));<br>
words : words.sort((a, b) => a.localeCompare(b, "fr", { sensitivity: "accent" }));
<br>
 Conclusion<br>
✅ For basic English sorting, sort() works fine.
❌ But sort() is case-sensitive and doesn't handle accents or numbers well.
✅ Use localeCompare() for case-insensitive, numeric, and accent-aware sorting.

<br><br>
.filter() : Removes elements from an array based on a condition (returns a filtered array).<br><br>

.map(): Transforms each element in an array and returns a new array.<br>
.map(Number) : convert an array of strings (or other values) into an array of numbers.<br>
const squares = numbers.map(num => num * num);<br><br>

.reduce() :	Condenses an array into a single value (sum, product, object, etc.).<br><br>


return /^(\d{4}|\d{6})$/.test(pin);<br>
Regular Expression:<br>
The regex is written between two forward slashes (/).<br>
The caret ^ asserts that the match must begin at the start of the string.<br>
\d This matches any digit (0 through 9).<br>
The {4} means "exactly 4 occurrences" of a digit.<br>
The pipe | acts as a logical OR.<br>
The dollar sign $ asserts that the match must end at the end of the string. This ensures that after the 4 or 6 digits, there are no extra characters.<br>
This ensures that after the 4 or 6 digits, there are no extra characters.<br>
The .test() method is called on the regex.<br><br>


Optional chaining (?.) - It lets you safely access deeply nested properties without getting a runtime error if something in the chain is null or undefined. <br>
?? Nullish Coalescing -  lets you provide a fallback only when the value is null or undefined (not for false, 0, '', etc.).
<br><br>
Assignment Operators <br>
Operator	Equivalent To	Example <br>
+=	        a = a + b	x += 5 (adds 5 to x) <br>
-=	        a = a - b	x -= 3 (subtracts 3 from x) <br>
*=	        a = a * b	x *= 2 (multiplies x by 2)<br>
/=	        a = a / b	x /= 4 (divides x by 4)<br>
**= 	    a = a ** b	x **= 2 (raises x to the power of 2)<br><br>

<table data-start="3015" data-end="3551" node="[object Object]"><thead data-start="3015" data-end="3115"><tr data-start="3015" data-end="3115"><th data-start="3015" data-end="3027">Loop Type</th><th data-start="3027" data-end="3038">Use Case</th><th data-start="3038" data-end="3071">Supports <code data-start="3049" data-end="3056">break</code> / <code data-start="3059" data-end="3069">continue</code>?</th><th data-start="3071" data-end="3094">Returns a New Array?</th><th data-start="3094" data-end="3115">Works on Objects?</th></tr></thead><tbody data-start="3195" data-end="3551"><tr data-start="3195" data-end="3266"><td><code data-start="3197" data-end="3202">for</code></td><td>Best for full control, large datasets</td><td>✅ Yes</td><td>❌ No</td><td>❌ No</td></tr><tr data-start="3267" data-end="3328"><td><code data-start="3269" data-end="3280">forEach()</code></td><td>Simple array iteration</td><td>❌ No</td><td>❌ No</td><td>❌ No</td></tr><tr data-start="3329" data-end="3404"><td><code data-start="3331" data-end="3338">map()</code></td><td>When transforming data into a new array</td><td>❌ No</td><td>✅ Yes</td><td>❌ No</td></tr><tr data-start="3405" data-end="3472"><td><code data-start="3407" data-end="3417">for...in</code></td><td>Looping through object keys</td><td>✅ Yes</td><td>❌ No</td><td>✅ Yes</td></tr><tr data-start="3473" data-end="3551"><td><code data-start="3475" data-end="3485">for...of</code></td><td>Looping through array values, iterables</td><td>✅ Yes</td><td>❌ No</td><td>❌ No</td></tr></tbody></table>

<br><br>
Object.defineProperty: This method allows defining or modifying properties of an object in a precise way.
<br><br>
Destructuring:<br>
Destructuring is a syntax in JavaScript that lets you unpack values from arrays or pull out properties from objects and assign them to variables — all in one line.<br><br>
Object Destructuring<br>
const user = {
  name: "Alice",
  age: 25,
  city: "New York"
};
<br>
// Destructure properties into variables<br>
const { name, age } = user;
<br>
console.log(name); // Alice<br>
console.log(age);  // 25<br>
<br><br>
Array Destructuring <br>
const numbers = [1, 2, 3];<br>

// Destructure array items<br>
const [first, second] = numbers;<br>

console.log(first);  // 1<br>
console.log(second); // 2<br><br>