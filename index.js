const fs =require('fs');
let data;
fs.readFile('index.html', 'utf8', function (err, datat) {
    // Display the file content
    data=datat
});
const now = new Date();
const test="Current Date and Time:", now.toString();

const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Wesam!\n'
  res.end(test);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
