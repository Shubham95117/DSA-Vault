/*
Problem Description
Array Subset of Another Array
You are given two arrays: arr1 of size n and arr2 of size m. Your task is to determine whether arr2 is a subset of arr1.

You are not allowed to use maps or sets for solving this problem.

Importat : Return true or false.



Example Test Cases
Test Case 1
Input:

6

1 2 3 4 5 6

3

2 4 6

Output:

Yes

Explanation: arr2 elements {2,4,6} are present in arr1.


Test Case 2
Input:

5

10 20 30 40 50

3

10 60 30

Output:

No

Explanation: arr2 contains 60, which is not in arr1.
*/
class Solution {
  /**
   * Checks if arr2 is a subset of arr1 without using maps/sets.
   * @param {number[]} arr1 The main array.
   * @param {number} n The size of arr1.
   * @param {number[]} arr2 The array to check as a subset.
   * @param {number} m The size of arr2.
   * @returns {boolean} True if arr2 is a subset of arr1, otherwise false.
   */
  isSubset(arr1, n, arr2, m) {
    // Your logic here
    for (let num of arr2) {
      if (!arr1.includes(num)) {
        return false;
      }
    }
    return true;
  }
}
