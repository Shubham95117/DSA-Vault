/*
Write a program to generate the following pattern given below:

1

12

123

1234
*/
function pattern() {
  for (let i = 1; i <= 4; i++) {
    let res = "";
    for (let j = 1; j <= i; j++) {
      res += j;
    }
    console.log(res);
  }
}
