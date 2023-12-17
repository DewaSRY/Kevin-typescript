function testingType(num: number) {
  console.log("halloo mei apa kabar\n".repeat(num));
}

testingType(40);
const body = document.getElementById("root") as HTMLElement;

body.insertAdjacentHTML(
  "afterbegin",
  `
  <h1>hallo mei</h1>
`
);
