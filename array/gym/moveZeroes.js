/*
Problem Statement
Given an array of integers, move all the zeroes to the end of the array while maintaining the relative order of the non-zero elements. The operation should be performed in-place, meaning that you should not use an additional array for storage.



Input Format
The first line contains an integer N – the number of elements in the array.
The second line contains N space-separated integers – the elements of the array.
Output Format
Print the modified array after moving all zeroes to the end, while preserving the order of non-zero elements.

Example Input & Output
Example 1
Input
5

0 1 0 3 12

Output
1 3 12 0 0

Explanation
The zeroes are moved to the end while keeping the order of 1, 3, 12 unchanged.
*/
var moveZeroes = function (nums) {
  let nonZeroIndex = 0;

  // Move non-zero elements forward
  for (let num of nums) {
    if (num !== 0) {
      nums[nonZeroIndex++] = num;
    }
  }

  // Fill remaining indices with zeroes
  for (let k = nonZeroIndex; k < nums.length; k++) {
    // Fixed condition syntax
    nums[k] = 0;
  }
};

// Example usage:
let nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1); // Output: [1, 3, 12, 0, 0]
