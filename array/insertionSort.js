let arr = [10, 3, 500, 2, 5];

for (let i = 1; i < arr.length; i++) {
  let temp = arr[i];
  let j = i - 1;
  while (j >= 0 && arr[j] > temp) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = temp;
}
console.log(arr);
