export function getAllDogs() {
  // Your code here
  return fetch("/dogs");
}

export function getDogNumberTwo() {
  // Your code here
  return fetch("/dogs/2");
}

export function postNewDog() {
  // Your code here
  return fetch("/dogs", {
    method: "post",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      name: "Hachi Roku",
      age: 86,
    }),
  });
}

export function postNewDogV2(name, age) {

  // Your code here
  const method = 'POST'

  const url = "/dogs";
  const headers = { "content-type": "application/x-www-form-urlencoded" };

  const body = new URLSearchParams({ name, age });

  const options = { method, headers, body };

  return fetch(url, options);
}

export function deleteDog(id) {
  // Your code here
   const authKey = 'ckyut5wau0000jyv5bsrud90y' 
   const url = `/dogs/${id}/delete`

   const headers = {AUTH: authKey}

   return fetch(url, {
    method: 'POST', 
    headers
   })
}
