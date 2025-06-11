/*

In your quest, you may encounter the following scenario:



Input:



8

3 17 9 25 12 5 14 21

12



Output:

4





Explanation: In the mystical array with elements (3, 17, 9, 25, 12, 5, 14, 21), the magical key `12` is found at index `4`, revealing the path to the hidden treasure.
*/
function searchForElement(arr, length, target) {
  // Your implementation here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
