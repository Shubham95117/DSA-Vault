let n = 1234;

while (n) {
  let digit = n % 10;
  console.log(digit);
  n = Math.floor(n / 10);
}
