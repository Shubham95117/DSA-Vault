/*
Problem Statement:

Given an array of integers nums, your task is to find all the leaders in the array. An element is called a leader if it is greater than all the elements to its right side in the array.



Constraints:

1 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4


Input Format:

An integer n representing the size of the array.
n space-separated integers representing the elements of the array.


Output Format:

Output an array of integers representing the leaders in the array. The elements in the output array should be in the same order as they appear in the input array.


Examples:

Input:

Array: 16 17 4 3 5 2

Output : 17 5 2

Explanation: In the given array, the leaders are 17 (greater than 4, 3, 5, 2), 5 (greater than 2), and 2 (no elements to the right).
*/
var leaders = function (nums) {
  leaders = [];
  let maxRight = nums[nums.length - 1];
  leaders.push(maxRight);
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] >= maxRight) {
      maxRight = nums[i];
      leaders.push(maxRight);
    }
  }
  return leaders.reverse();
};
