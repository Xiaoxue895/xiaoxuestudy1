const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here 

const http = require('http');

const fs = require('fs');
const path = require('path');

let lastPostedData = null; 

server = http.createServer((req, res) => {
    if (req.method === 'POST') {
      let reqBody = '';
  
      req.on('data', (chunk) => {
        reqBody += chunk;
      });
  
      req.on('end', () => {
        req.body = parseBody(reqBody);  // Use parseBody function
        lastPostedData = req.body;  // Store the parsed body for later retrieval
        console.log(req.body);
  
        res.statusCode = 302;  // 302 status code for redirection
        res.setHeader('Location', '/');
        res.end();
      });
    } else if (req.method === 'GET' && req.url === '/') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
  
      // Read and serve the index.html file
      let filePath = path.join(__dirname, 'index.html');
      let html = fs.readFileSync(filePath, 'utf-8');
  
      // If there's data from a POST request, display it
      if (lastPostedData) {
        html += `<pre>${JSON.stringify(lastPostedData, null, 2)}</pre>`;
      }
  
      res.end(html);
    } else {
      res.statusCode = 404;
      res.end('Not Found');
    }
});


server.listen(5000, () => {
  console.log("Successfully started the server on port 5000");
});


/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
