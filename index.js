const fs =require('fs');
const data = fs.readfile('./index.html','utf8');
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Wesam!\n'
  res.end(data);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
