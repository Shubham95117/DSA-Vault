/*
Watch this video to understand how to solve pattern using while loops :- Video_Link



Print the following pattern using while loops

*****

****

***

**

*
*/

let i = 5;
while (i) {
  let str = "";
  let j = 1;
  while (j <= i) {
    str += "*";
    j++;
  }
  console.log(str);
  i--;
}
