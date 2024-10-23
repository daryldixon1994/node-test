const http = require("http");
const fs = require("fs");
const path = require("path");
const server = http.createServer((req, res) => {
  // console.log(req.url)
  if (req.url === "/") {
    let indexPath = path.resolve("content", "index.html");
    const data = fs.readFileSync(indexPath, { encoding: "utf-8" });
    res.write(data);
    res.end();
  } else if (req.url === "/about") {
    let indexPath = path.resolve("content", "about.html");
    const data = fs.readFileSync(indexPath, { encoding: "utf-8" });
    res.write(data);
    res.end();
  } else if (req.url === "/login") {
    let indexPath = path.resolve("content", "login.html");
    const data = fs.readFileSync(indexPath, { encoding: "utf-8" });
    res.write(data);
    res.end();
  }
});

server.listen(5000, (err) => {
  if (err) throw err;
  console.log("server is up and running on port 5000");
});
