const http = require("http");
const fs = require("fs");

const getContentType = (file) => {
  const extension = file.split(".")[1];

  console.log("file ext ", extension);

  if (extension === "css") return "text/css";

  if (extension === "jpg") return "image/jpeg";

  return "text/plain";
};

const server = http.createServer((req, res) => {
  // Your code here
  if (req.method === "GET" && req.url.startsWith("/static")) {
    console.log("req url", req.url);

    const urlParts = req.url.split("/static");

    console.log("url parts", urlParts);

    const asset = urlParts[urlParts.length - 1];

    console.log("asset ", asset);

    const resBody = fs.readFileSync("./assets" + asset);

    res.statusCode = 200;
    res.setHeader("Content-Type", getContentType(asset));

    return res.end(resBody);
  }

  if (req.method === "GET" && req.url === "/") {
    const resBody = fs.readFileSync("./index.html", "utf-8");

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    return res.end(resBody);
  }
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
