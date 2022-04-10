const http = require("http");
const port = 5000;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`
        <h1>Home Page</h1>
        `);
  }
   else if (req.url === "/about") {
    res.end(`
        <h1>About Page</h1>
        `);
  }
  else 
  {
      res.end(`
    <h1>Oooops!</h1>
    <p>Can't find this page</hp>
    <a href="/">Go Back!</a>
    `);
  }
});

server.listen(port, function () {
  console.log("server listening");
});
