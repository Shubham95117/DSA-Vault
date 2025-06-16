/*
Find the Second Largest Element
Given an array of N integers, find the second largest element in the array.

If there is no second largest element (i.e., all elements are the same or only one element exists), return -1.

Input Format
An integer N 
A space-separated array of N integers .
Output Format
Print a single integer — the second largest element in the array. If there is no valid second largest element, print -1.



Test Cases
Test Case 1
5

1 2 3 4 5

Output
4

Explanation
The largest element is 5, and the second largest is 4.



Test Case 2
Input
6

9 2 3 6 8 6

Output
8

Explanation
The largest element is 9, and the second largest is 8.*/
let arr = [9, 2, 3, 6, 8, 6];

let smax = -Infinity,
  max = -Infinity;
for (let num of arr) {
  if (num > max) {
    smax = max;
    max = num;
  } else if (num > smax && num < max) {
    smax = num;
  }
}
console.log(smax);
