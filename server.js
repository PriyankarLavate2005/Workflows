// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url == '/hello') {
//         res.end('Hello World');
//     } 
//     else if(req.url == '/info'){
//         res.end("here you can get information about the node js");
//     }
//     else {
//         res.end('Hello Priyanka'); 
//     }
// });
// server.listen(3002, () => {
//     console.log("Server started on port 3000");
// });
const http = require('http');
const assert = require('assert');

// Server setup
const server = http.createServer((req, res) => {
    if (req.url === '/hello') {
        res.end('Hello World');
    } else if (req.url === '/info') {
        res.end("Here you can get information about Node.js");
    } else {
        res.end('Hello Priyanka');
    }
});

server.listen(3002, () => {
    console.log("Server started on port 3002");
});

// Tests (only include this block in a test environment)
if (process.env.NODE_ENV === 'test') {
    describe('HTTP Server Test', () => {
        it('should respond with "Hello World" when request is made to /hello', (done) => {
            http.get('http://localhost:3002/hello', (res) => {
                assert.strictEqual(res.statusCode, 200);

                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });

                res.on('end', () => {
                    assert.strictEqual(data, 'Hello World');
                    done();
                });
            });
        });

        // Add more tests as needed
    });
}
