/*
Print the following series using for loop:-

1,8,27,64,125,216,......n

Input

125

Output :-

1

8

27

64

125


*/
let n = 125;

for (let i = 0; i * i * i <= n; i++) {
  console.log(i * i * i);
}
