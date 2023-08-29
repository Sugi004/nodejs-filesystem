// console.log("hi");

// const os = require("os");

// console.log(os.cpus());

//-------File System-------//

// const fs = require("fs");

// Async
// try {
//   fs.writeFile(
//     "sample2.txt",
//     "I am created through node.js second time",
//     "utf-8",
//     (err) => {
//       if (err) console.log(err);

//       fs.readFile("sample.txt", "utf-8", (err, data) => {
//         if (err) console.log(err);

//         console.log(data);
//       });
//     }
//   );
// } catch (error) {
//   console.log(error);
// }

//Sync

//-------- HTTP ---------//

const http = require("http");
const fs = require("fs");
const port = 8000;

const server = new http.createServer((req, resp) => {
  try {
    let date = new Date();
    let timeStamp = +new Date();
    fs.writeFileSync(`DateTime/${timeStamp}`, date.toString());
    let data = fs.readFileSync(`DateTime/${timeStamp}`);

    resp.writeHead(200, { "Content-type": "application/json" });
    resp.end(data);
  } catch (error) {
    console.log(error);
  }
});

server.listen(port, () => console.log(`Server listening to port: ${port}`));
