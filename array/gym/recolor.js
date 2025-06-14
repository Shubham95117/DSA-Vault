/*
Problem Statement:

You are given a string s consisting of 'B' (black) and 'W' (white) characters. Your task is to find the minimum number of recolor operations required to obtain a substring of length k consisting of k consecutive 'B' characters. A recolor operation involves changing a 'W' character to 'B'



Constraints:

1 <= |s| <= 10^5
1 <= k <= |s|
Input Format:

A string s consisting of 'B' and 'W' characters.
An integer k representing the length of the desired substring consisting of consecutive 'B' characters.
Output Format:

Output an integer representing the minimum number of recolor operations required to obtain a substring of length k consisting of k consecutive 'B' characters.


Examples:

Input:

s = "BWBBW"

k = 3

Output : 1

Explanation: In the given string, the substring "BBB" consisting of 3 consecutive 'B' characters can be obtained by recoloring the 'W' character at index 2.
*/
var minRecolors = function (s, k) {
  let minWhite = Infinity;
  let whiteCount = 0;
  //first window
  for (let i = 0; i < k; i++) {
    if (s[i] == "W") whiteCount++;
  }
  minWhite = whiteCount;

  for (let i = k; i < s.length; i++) {
    if (s[i] == "W") whiteCount++;
    if (s[i - k] == "W") whiteCount--;
    minWhite = Math.min(minWhite, whiteCount);
  }
  return minWhite;
};
