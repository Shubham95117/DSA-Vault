/*
*****

****

***

**

*
*/
//first normal

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}

//second reverse

for (let i = 5; i >= 0; i--) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}
