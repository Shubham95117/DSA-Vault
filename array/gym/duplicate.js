/*
7 23 15 42 7 56 89 15 91 42



Output:



7
*/
function findFirstDuplicateElement(arr, length) {
  let seen = new Set();
  for (let num of arr) {
    if (seen.has(num)) return num;
    seen.add(num);
  }
}
