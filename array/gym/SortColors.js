/*
Given an array nums containing only 0s, 1s, and 2s, your task is to sort the array in ascending order.



Constraints:

1 <= nums.length <= 10^5
nums[i] is either 0, 1, or 2.


Input Format:

An integer n representing the size of the array.
n space-separated integers representing the elements of the array (0s, 1s, and 2s).


Output Format:

Output an array representing the sorted array in ascending order.


Examples:

Input:

Array: 2 0 2 1 1 0

Output : 0 0 1 1 2 2

Explanation: After sorting the array, the elements are arranged in ascending order: [0, 0, 1, 1, 2, 2].
*/
var sortColors = function (nums) {
  let l = 0,
    mid = 0,
    h = nums.length - 1;
  while (mid <= h) {
    if (nums[mid] == 0) {
      [nums[l], nums[mid]] = [nums[mid], nums[l]];
      l++;
      mid++;
    } else if (nums[mid] == 1) {
      mid++;
    } else {
      [nums[mid], nums[h]] = [nums[h], nums[mid]];
      h--;
    }
  }
  return nums;
};
