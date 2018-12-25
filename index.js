const http = require('http');
const PORT = process.env.PORT || 5000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hi Thusitha, Welcome to new world of NodeJs\n');
});
server.listen(PORT, () => {
  console.log(`Server running on ${PORT}/`);
});