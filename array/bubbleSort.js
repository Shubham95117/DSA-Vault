let arr = [44, 5, 1, 23, 2, 8, 1, 0];

let n = arr.length;

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      swap(arr, j + 1, j);
    }
  }
}
console.log(arr);

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

console.log(arr);
