/*
Given an array find the maximum in it and return it 



Example:-

Input:-

Arr=[5, 4, 7, 2, 6]

Ouput:-

7
*/

let arr = [10, 5, 2, 0, 1, 55];
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
}
console.log(max);
