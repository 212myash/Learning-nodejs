function homeRoute(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end("<h1>About Page</h1>");
}

module.exports = aboutRoute;
