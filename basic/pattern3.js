/*
Print the following pattern using for loop

*****

****

***

**

*

*

**

***

****

*****
*/
// First Part: Decreasing stars from 5 to 1
for (let i = 5; i >= 1; i--) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "*";
  }
  console.log(line);
}

// Second Part: Increasing stars from 1 to 5
for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "*";
  }
  console.log(line);
}
