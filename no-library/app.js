// import from local file
// const blog = require('./blog')
// blog();

//http
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    let path = "./no-library/";
    switch(req.url) {
        case '/':
            path += "index.html";
            req.statusCode = 200;
            break;

        case '/about':
            path += "about.html";
            req.statusCode = 200;
            break;
        
        case '/about-me':
            res.setHeader('Location', '/about-me');
            req.statusCode = 301;
            break;
        
        default:
            path += "/err.html";
            req.statusCode = 404;
            break;
    }
    fs.readFile(path, 'utf8', (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        }
        res.end(data);
    })
})

server.listen(3000, 'localhost', () => {
    console.log('server is up and running');
})