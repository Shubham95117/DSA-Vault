/*
  1

      222

    33333

  4444444

555555555
*/
function pattern() {
  let k = 1;
  for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= k; j++) {
      line += i;
    }
    console.log(line);
    k += 2;
  }
}
