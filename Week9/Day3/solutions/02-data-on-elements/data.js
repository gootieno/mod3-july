// Your code here
window.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add");
  const input = document.getElementById("name");
  const list = document.getElementById("shopping-list");

  addButton.addEventListener("click", (e) => {
    e.preventDefault();

    let item = input.value;
    let type = document.getElementById("type").value;

    let listElement = document.createElement("li");
    listElement.setAttribute("data-type", type);

    listElement.innerText = item;

    list.appendChild(listElement);
    input.value = "";
  });
});
