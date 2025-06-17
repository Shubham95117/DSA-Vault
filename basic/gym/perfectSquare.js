/*
Print all the perfect squares between 1 and N.



Constraints:

1 <= N <= 10^6



Input Format:

An integer N representing the upper limit of the range.



Output Format:

Print all perfect squares between 1 and N, separated by spaces.



Sample Examples:

1.

Input: N = 15

Output: 1 4 9

Explanation: The perfect squares between 1 and 15 are 1, 4, and 9.

2.

Input: N = 25

Output: 1 4 9 16 25

Explanation: The perfect squares between 1 and 25 are 1, 4, 9, 16, and 25.
*/
function perfectSquares(n) {
  for (let i = 1; i * i <= n; i++) {
    console.log(i * i);
  }
}
