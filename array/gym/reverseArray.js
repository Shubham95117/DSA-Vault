/*
Raju provides you with the following details:



1. An integer `n` (1 ≤ n ≤ 10^5), representing the size of the array.

2. A line of `n` space-separated integers, each symbolizing an element of the array.



Output:



Your mission is to implement a function `reverse_array` that takes the size of the array and the array elements as input and returns a new array with the reversed elements.



Example:



Input:

6

17 32 9 5 21 14



Output:

14 21 5 9 32 17
*/
const reverseArray = (arr, length) => {
  // Your implementation here to reverse the array and return a new array
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    swap(arr, start, end);
    start++;
    end--;
  }
  return arr;
};

function swap(arr, start, end) {
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
}
