const { createServer } = require('node:http');

const hostname = '127.0.0.1'; // Same with local host
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hoi dan it voi eric \n hello');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
