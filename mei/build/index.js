"use strict";
function testingType(num) {
    console.log("halloo mei apa kabar\n".repeat(num));
}
testingType(40);
const body = document.getElementById("root");
body.insertAdjacentHTML("afterbegin", `
  <h1>hallo mei</h1>
`);
