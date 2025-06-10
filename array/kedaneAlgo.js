/*
Given an array find the maximum sum subarray. Return the maximum sum of the subarray.

Input:-

[5,2,-4,-5, 3,-1,2,3,1]

Output:-

8

Reason :- 3,-1,2,3,1 is the maximum subarray possible.
*/

let arr = [5, 2, -4, -5, 3, -1, 2, 3, 1];

function find_maximum_subarray(arr, length) {
  let currSum = arr[0];
  let maxSum = arr[0];

  for (let i = 1; i < length; i++) {
    // Decide whether to add the current element to the existing subarray or start fresh from this element.
    currSum = Math.max(arr[i], currSum + arr[i]);
    // Update maxSum if the new currSum is higher.
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
}
