/*
Check for Palindrome Array Write a program to check if an array reads the same forward and backward (i.e., it is a palindrome).
Input and Output Format Input: The first line contains an integer n (the number of elements in the array). The second line contains n space-separated integers, representing the elements of the array. Output: Print "YES" if the array is a palindrome, otherwise print "NO".
Examples: Test Case 1 Input:
5
1 2 3 2 1
Output:
YES

*/
function isPalindromeArray(arr) {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    if (arr[start] !== arr[end]) {
      return "NO";
    }
    start++;
    end--;
  }
  return "YES";
}

// Example usage:
console.log(isPalindromeArray([1, 2, 3, 2, 1])); // Output: YES
console.log(isPalindromeArray([1, 2, 2, 3])); // Output: NO
