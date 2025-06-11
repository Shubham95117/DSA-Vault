/*
Your task is to output a single integer, representing the largest element present in the given array.



Example:



Input:

5

12 7 31 18 25

Output:

31

*/
function find_maximum(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
