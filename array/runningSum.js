/*
Input: nums = [1,2,3,4]

Output: [1,3,6,10]

Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

Example 2:

Input: nums = [1,1,1,1,1]

Output: [1,2,3,4,5]

Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

Example 3:

Input: nums = [3,1,2,10,1]

Output: [3,4,6,16,17]*/

let nums = [3, 1, 2, 10, 1];
let res = [];

let sum = nums[0];
res.push(sum);
for (let i = 1; i < nums.length; i++) {
  sum += nums[i];
  res.push(sum);
}
console.log(res);
