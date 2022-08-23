const http = require("http");

let nextDogId = 1;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parsing the body of the request
    // mars+rover%21
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
      console.log(req.body);
    }
    // Do not edit above this line

    // define route handlers here
    if (req.method === "GET" && req.url === "/") {
      const resBody = "Dog Club";

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      return res.end(resBody);
    }

    if (req.method === "GET" && req.url === "/dogs") {
      const resBody = "Dog Index";

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      return res.end(resBody);
    }

    if (req.method === "GET" && req.url.startsWith("/dogs")) {
      console.log("req url /dogs ", req.url);

      const urlParts = req.url.split("/");

      console.log("url parts ", urlParts);

      const dogId = urlParts[urlParts.length - 1];

      console.log("dog id", dogId);

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      return res.end(`Dog details for dog ${dogId}`);
    }
    // Do not edit below this line
    // Return a 404 response when there is no matching route handler
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    return res.end("No matching route handler found for this endpoint");
  });
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
