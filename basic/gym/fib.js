/*
The task is to find the nth number in the Fibonacci series.

The Fibonacci series is defined as follows: the first two numbers are 0 and 1, and each subsequent number is the sum of the two preceding numbers. The series begins: 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.



Constraints:

0 <= n <= 40

Input Format:

An integer, 'n', representing the position of the desired Fibonacci number.

Output Format:

An integer, the nth Fibonacci number.

Sample Examples:

1.

Input: 6

Output: 5

Explanation: The 6th Fibonacci number is 5.

2.

Input: 9

Output: 21

Explanation: The 9th Fibonacci number is 21.
*/
function print_series(n) {
  if (n == 1) {
    return console.log(0);
  }
  let a = 0,
    b = 1;
  for (let i = 3; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  console.log(b);
}
