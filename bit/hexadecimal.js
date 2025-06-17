/*
Given a 32-bit integer num, return a string representing its hexadecimal representation. For negative integers, Two's complement method is used.

All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.

Note: You are not allowed to use any built-in library method to directly solve this problem.

 

Example 1:

Input: num = 26

Output: "1a"

Example 2:

Input: num = -1

Output: "ffffffff"
*/
var toHex = function (num) {
  if (num === 0) return "0";

  const hexDigits = "0123456789abcdef";
  let result = "";

  // Ensure num is positive by using >>> to perform unsigned right shift
  while (num !== 0) {
    // Extract the last four bits of the number
    const digit = num & 15;

    // Convert the four bits to the corresponding hexadecimal digit
    result = hexDigits[digit] + result;

    // Right shift the number by four bits
    num >>>= 4;
  }

  return result;
};
