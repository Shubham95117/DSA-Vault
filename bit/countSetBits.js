/*
Example 1:

Input: n = 00000000000000000000000000001011

Output: 3

Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

Example 2:

Input: n = 00000000000000000000000010000000

Output: 1

Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
*/

let n = 15;
let count = 0;
while (n) {
  count += n & 1; //&1  means 1&1=1 true
  n = n >> 1; //right shift 1--removes last
}
console.log(count);
