// Your code here
window.addEventListener("DOMContentLoaded", () => {
  //   alert("DOM has loaded!");
  const redInput = document.getElementById("red-input");

  const changeToRed = () => {
    if (redInput.value === "red") {
      console.log("red input", redInput);
      console.log("red input value", redInput.value);
      redInput.style.backgroundColor = "red";
    }
  };

  redInput.addEventListener("input", changeToRed);

  const createLi = () => {
    const listAddValue = document.getElementById("list-add");
    const li = document.createElement("li");
    console.log("listAddValue ", listAddValue);
    li.innerText = listAddValue.value;

    // find and select the ul on the page to append the li
    const ul = document.getElementsByTagName("ul")[0];
    ul.appendChild(li);

    listAddValue.value = "";
  };
  // target the add-item button and listen for a click
  const addItem = document.getElementById("add-item");
  // save the value of list-add to a variable
  // create li and set inner text to the value from list-add
  addItem.addEventListener("click", createLi);

  const colorSection = document.getElementById("section-3");

  const colorInput = document.getElementById("color-select");

  const changeInput = () => {
    const colorValue = colorInput.value;

    colorSection.style.backgroundColor = colorValue;
  };

  colorInput.addEventListener("input", changeInput);

  const removeButton = document.getElementById("remove-listeners");

  removeButton.addEventListener("click", () => {
    colorInput.removeEventListener("input", changeInput);
    redInput.removeEventListener("input", changeToRed);
    addItem.removeEventListener("click", createLi);
  });
});
