const select = () => {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  // Your code here
  let getSeeded = () => {
    let body = document.body;
    return body.getElementsByClassName("seed");
  };
  console.log("seeded ", getSeeded());
  // 2. Get all seedless fruit elements
  // Your code here
  const seedLess = document.querySelectorAll("li.seedless");
  console.log("seedless ", seedLess);
  // 3. Get first seedless fruit element
  // Your code here
  const firstSeedless = document.querySelectorAll(".seedless")[0];
  console.log("first seedless ", firstSeedless);
  /* Section 2 */
  // 4. Get inner span with text "you"
  // Your code here
  const spans = Array.from(document.querySelectorAll("span"));
  const you = spans.find((element) => {
    if (element.innerText.includes("you")) {
      return element;
    }
  });
  console.log("you ", you);
  // 5. Get all children of element "wrapper"
  // Your code here
  const wrapper = document.getElementById("wrapper").children;
  //   const wrapperChilren = wrapper.childNodes;
  //   console.log("wrap ", wrapper);
  console.log("wrapper ", wrapper);
  // 6. Get all odd number list items in the list
  // Your code here
  const odd = document.getElementsByClassName("odd");
  console.log("odd ", odd);
  // 7. Get all even number list items in the list
  // Your code here
  let evens = document.querySelectorAll("ol > li:not(.odd)");
  console.log("evens ", evens);
  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here
  const unClassedTech = document.querySelectorAll("a:not([class])");
  console.log("un-classed tech  ", unClassedTech);
  // 9. Get "Amazon" list element
  // Your code here
  const amazon = document.getElementsByClassName("shopping")[0];

  console.log("Amazon ", amazon);
  // 10. Get all unicorn list elements (not the image element)
  // Your code here
  const unicorns = document.querySelectorAll("#three li");
  console.log("unicorns!", document.querySelectorAll("#three li"));

  // to see li children (img elements)
  for (let i = 0; i < unicorns.length; i++) {
    console.log(unicorns[i].children);
  }
};

window.onload = select;
