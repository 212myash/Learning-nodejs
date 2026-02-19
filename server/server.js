const http = require('http');
const homeRoute = require('./routes/home');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        homeRoute(req, res);
    }
});

server.listen(3000);
