/*
Input:

10

7 12 4 9 3 7 13 9 4 12 3



Output:

13
*/
function findUniqueMagicalKey(arr, length) {
  let countMap = new Map();

  for (let num of arr) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  for (let [key, value] of countMap) {
    if (value === 1) return key;
  }
  return -1;
}
