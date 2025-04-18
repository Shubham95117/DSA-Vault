/*
Arrays
Arrays are list-like objects used to store multiple values under a single variable name. They can hold items of various types (numbers, strings, Boolean, objects, even other arrays) and are zero-indexed. Being objects, arrays come with many built-in methods that simplify common tasks like adding, removing, or iterating over elements.
*/

/*
Key Characteristics of Arrays
Dynamic Sizing: Arrays can grow or shrink as needed.

Indexed Access: Each element in an array has an index (starting at 0) which you can use to access or modify the element.

Built-in Methods: Methods like push(), pop(), shift(), and unshift() allow you to modify the array efficiently.
*/
// Creating an array using an array literal
const cars = ["Saab", "Volvo", "BMW"];

// Accessing an element (first element, index 0)
console.log(cars[0]); // Output: Saab

// Adding an element to the end of the array
cars.push("Audi");

// Removing the last element of the array
const removedCar = cars.pop();

console.log(cars); // Output: ["Saab", "Volvo", "BMW", "Audi"] after push, then back to original after pop
