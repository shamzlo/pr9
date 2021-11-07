const http = require('http');
const users =[{name:"user1",age:"12"},{name:"user2",age:"13"}]
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    
    if(req.url=="/users"){
    console.log(req);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/json');
  res.end(JSON.stringify(users));
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
