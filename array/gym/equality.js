/*
3 7 2 8 6

3 7 2 8 6



Output



True


*/
function checkArraysEquality(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
