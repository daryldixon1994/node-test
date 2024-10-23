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
  } else if (req.url.match("/styles/style.css")) {
    const cssPath = path.resolve("content", "styles", "style.css");
    let fileStream = fs.createReadStream(cssPath, "UTF-8");
    res.writeHead(200, { "Content-Type": "text/css" });
    fileStream.pipe(res);
  } else if (req.url.match("/assets/logo.webp")) {
    const imgPath = path.resolve("assets", "logo.webp");
    let fileStream = fs.createReadStream(imgPath);
    res.writeHead(200, { "Content-Type": "image/webp" });
    fileStream.pipe(res);
  }
});

server.listen(5000, (err) => {
  if (err) throw err;
  console.log("server is up and running on port 5000");
});
