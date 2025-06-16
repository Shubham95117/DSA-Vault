/*roblem: Check if an Array is Sorted in Ascending Order
Problem Statement:
Write a program to check whether a given array is sorted in ascending order.



Input and Output
Input Format:
The first line contains an integer n (1 ≤ n ≤ 10⁶), representing the size of the array.
The second line contains n space-separated integers (-10⁹ ≤ arr[i] ≤ 10⁹), representing the array elements.
Output Format:
Print "True" if the array is sorted in ascending order, otherwise print "False".


Example 1:
Input:

5

1 2 3 4 5

Output:

True


Example 2:
Input:

5

1 3 2 4 5
*/
function isSortedAscending(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

// Example usage:
console.log(isSortedAscending([1, 2, 3, 4, 5])); // Output: true
console.log(isSortedAscending([1, 3, 2, 4, 5])); // Output: false
