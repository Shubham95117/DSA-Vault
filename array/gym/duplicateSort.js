/*
You are given a sorted array of integers. Your task is to remove the duplicate elements in-place, such that each element appears only once, and return the new length of the array. The relative order of the elements should be maintained.

You must not use extra space for another array; you should modify the input array in-place with O(1) extra memory.



Constraints:
nums is sorted in non-decreasing order.
Return the count of unique elements with making changes to the array in place.


Example 1:
Input:
nums = [1, 1, 2]

Output:
1

2

Explanation:
The modified array will be [1, 2, _], where _ represents ignored elements.



Example 2:
Input:
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

Output:
1

2

3

4

5

Explanation:
The modified array will be [0, 1, 2, 3, 4, _, _, _, _, _].


*/
function removeDuplicates(nums) {
  // Your logic here
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}
