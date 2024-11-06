gitconst http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/hello') {
        res.end('Hello World');
    } 
    else if(req.url == '/info'){
        res.end("here you can get information about the node js");
    }
    else {
        res.end('Hello Priyanka'); 
    }
});
server.listen(3002, () => {
    console.log("Server started on port 3000");
});