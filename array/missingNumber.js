/*

Input: nums = [3,4,1]

Output: 2

Explanation: n = 4 since there are 3 numbers, so all numbers are in the range [1,4]. 2 is the missing number in the range since it does not appear in nums.



Example 2:

Input: nums = [2,1]

Output: 3

Explanation: n = 3 since there are 2 numbers, so all numbers are in the range [1,3]. 2 is the missing number in the range since it does not appear in nums.



Example 3:

Input: nums = [9,6,4,2,3,5,7,1]

Output: 8

Explanation: n = 9 since there are 8 numbers, so all numbers are in the range [1,9]. 8 is the missing number in the range since it does not appear in nums.

*/

let nums = [9, 6, 4, 2, 3, 5, 7, 1];
let n = nums.length + 1;

let expectedSum = (n * (n + 1)) / 2;

let actualSum = 0;

for (let i = 0; i < nums.length; i++) {
  actualSum += nums[i];
}
console.log(expectedSum - actualSum);
