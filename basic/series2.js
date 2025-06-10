/*
Input:-

n=7

output:- except 5

1

2

3

4

6

7
*/

let n = 7;
let i = 1;

while (i <= n) {
  if (i % 5 == 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}
