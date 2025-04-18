/*
Strings
Strings are sequences of characters used to represent text. Unlike arrays, strings are immutable, which means that once a string is created, its characters cannot be changed individually. However, there are many methods available to work with strings and produce new strings based on operations like slicing, concatenation, and replacing.
*/

/*
Key Characteristics of Strings
Immutable: Every modification of a string returns a new string.

Array-like Behavior: You can access individual characters using bracket notation (e.g., str[0]), though most string methods create a new string instead of modifying the original.

Rich Set of Methods: Methods such as split(), join(), slice(), substring(), replace(), and toLowerCase() allow you to manipulate text in many ways.
*/
// Creating a string
let greeting = "Hello, World! shubh";

// Accessing a character in the string
console.log(greeting[0]); // Output: "H"

// Splitting a string into an array of words
let words = greeting.split(" ");
console.log(words); // Output: ["Hello,", "World!"]

// Joining an array of strings into a single string
let joined = words.join(" ");
console.log(joined); // Output: "Hello, World!"

// Getting a substring from index 7 to the end
let sub = greeting.slice(7);
console.log(sub); // Output: "World!"

/*
interplay Between Arrays and Strings
There are many situations where you might want to convert a string to an array or vice versa. Here are two common operations:

Converting a String to an Array: Use the split() method to convert a string into an array of substrings based on a delimiter.

javascript
const sentence = "JavaScript is fun";
const words = sentence.split(" "); // ["JavaScript", "is", "fun"]
Converting an Array to a String: Use the join() method to combine an array’s elements into a single string, inserting a specified delimiter between elements.

javascript
const wordsArray = ["JavaScript", "is", "fun"];
const sentenceString = wordsArray.join(" "); // "JavaScript is fun"
*/
