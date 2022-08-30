/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    const url = data.message; // URL of new dog image
    console.log("url ", url);

    const urlParts = url.split("/");

    console.log("url parts ", urlParts);

    const breed = urlParts[urlParts.length - 2];
    console.log("breed ", breed);
    /*--------------- Get breed (Hint: Parse from URL) ---------------- */
    // Your code here
    // <li>
    //         <figure>
    //             <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg" />
    //             <figcaption>hound-afghan</figcaption>
    //         </figure>
    //   </li>
    /*------------ Create new dog card with the url above ------------- */
    /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
    // Your code here

    /* Add the new dog card as a child to the ul in the .gallery element */
    // Your code here

    // select a live element to append new element to
    const ul = document.querySelector("ul");
    console.log("ul ", ul);
    // create new element and associated children if any
    const li = document.createElement("li");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");

    img.src = url;
    img.setAttribute("id", "dog-image");
    img.style.height = "300px";
    figcaption.innerText = breed;
    // append them in correct order
    figure.append(img, figcaption);
    li.appendChild(figure);

    ul.appendChild(li);
  } catch (e) {
    console.log("Couldn't fetch dog :(");
  }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
  /*-------------------- Select the first dog card --------------------- */
  // Your code here
  const firstDog = document.querySelector("li");
  /*-------------------- Remove the first dog card --------------------- */
  // Your code here
  firstDog.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
  /*-------------------- Select the last dog card ----------------------- */
  // Your code here
  const dogs = document.querySelectorAll("ul > li");

  /*-------------------- Remove the last dog card ----------------------- */
  // Your code here
  dogs[dogs.length - 1].remove();
});
