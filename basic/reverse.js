/*
Write a program to return the reverse of a number

Input

n=123

output

321
*/
let n = 123;
let revesedNum = 0;
while (n) {
  let digit = n % 10;
  revesedNum = revesedNum * 10 + digit;
  n = Math.floor(n / 10);
}
console.log(revesedNum);
