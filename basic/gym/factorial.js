/*
Compute the factorial of a given number using a loop.



Constraints:

0 <= N <= 10

Input Format:

An integer 'N' for which the factorial needs to be calculated.



Output Format:

An integer representing the factorial of N.



Sample Examples:

1.

Input: 5

Output: 120

Explanation: The factorial of 5 is calculated as 5 * 4 * 3 * 2 * 1 = 120.

2.

Input: 8

Output: 40320

Explanation: The factorial of 8 is calculated as 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 40320
*/
function factorial(n) {
  let ans = 1;

  for (let i = 1; i <= n; i++) {
    ans = ans * i;
  }

  return ans;
}
