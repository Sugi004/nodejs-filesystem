const http = require("http");
const fs = require("fs");
const port = 8000;

const server = new http.createServer((req, resp) => {
  try {
    let date = new Date();
    let timeStamp = +new Date();
    fs.writeFileSync(`DateTime/${timeStamp}.txt`, date.toString());
    let data = fs.readFileSync(`DateTime/${timeStamp}`);

    resp.writeHead(200, { "Content-type": "application/json" });
    resp.end(data);
  } catch (error) {
    console.log(error);
  }
});

server.listen(port, () => console.log(`Server listening to port: ${port}`));
