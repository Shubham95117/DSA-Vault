// Examples:

// Input:

// Array: 4 3 2 7 8 2 3 1

// Output :  [2, 3]

// Explanation: In the given array, the integers 2 and 3 appear more than once.

// Example 2:

// Array: 1 1 2 2 3 3

// Output : [1, 2, 3]

// Explanation: In the given array, all integers appear more than once

//1
// var findDuplicates = function (nums) {
//   let duplicates = [];
//   let countMap = new Map();
//   for (let num of nums) {
//     countMap.set(num, (countMap.get(num) || 0) + 1);
//   }
//   for (let [key, value] of countMap) {
//     if (value > 1) {
//       duplicates.push(key);
//     }
//   }
//   return duplicates;
// };

//optimized
var findDuplicates = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      result.push(Math.abs(nums[i]));
    }
    nums[index] = -nums[index];
  }
  return result;
};
