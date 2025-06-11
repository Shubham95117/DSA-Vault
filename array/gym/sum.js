/*
 The first line contains an integer `n` (1 ≤ n ≤ 10^5), representing the size of the array.



2. The second line contains `n` space-separated integers, each denoting an element of the array.



Output:



Your objective is to output a single integer, representing the sum of all elements in the given array.



Example:



Input:



6

4 7 2 9 1 5



Output:



28



Explanation: In the given example, the array `arr` has six elements (4, 7, 2, 9, 1, 5). The sum of these elements is 4 + 7 + 2 + 9 + 1 + 5 = 28, and that is the expected output.
*/

function find_sum(arr, length) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
