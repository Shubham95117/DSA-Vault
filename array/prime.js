/*
Write a program to store first n prime numbers in an array . After storing return the array.﻿



Input:-

n=5

Output:- Return the output in the form of an array.

2

3

5

7

11
*/

let n = 5;

let i = 2;

let primes = [];

while (primes.length < n) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primes.push(i);
  }
  i++;
}

console.log(primes);
