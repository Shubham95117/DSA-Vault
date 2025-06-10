/*
Print the following series using while loop

1 4 9 16 25 36 …. n

Input :-

n = 49

Output :-

1

4

9

16

25

36

49
*/

let n = 49;
let i = 1;

while (i * i <= n) {
  console.log(i * i);
  i++;
}
