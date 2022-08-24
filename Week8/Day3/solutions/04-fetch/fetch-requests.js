/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

// Your code here

/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here

/* =================== 3. Print the Content-Type Header =================== */

// Your code here

/* ============== 4. Print the body of the response as text =============== */

// Your code here



const fetchProducts = async () => {
  const res = await fetch("/products");

  console.log("response object ", res);
  console.log(res.status);

  if (res.ok) {
    console.log(res.ok);

    console.log("response headers ", res.headers.get("content-type"));

    const resBody = await res.text();

    console.log(resBody);
  }
};
