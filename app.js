// ? syntax to import any package or module in nodejs (import the module first if it is not a core module)
const http = require('http')
function rqListener(req, res){

}
// ? takes requestListener as an argument 
// ? requestListener is a functiion that will execute for every incoming request
const server = http.createServer((req,res) => {   
    // ? req is the object nodeJS created for us with all the data of that request
   // console.log(req); => 
    console.log(req.url, req.method, req.headers);
    // ? setHeader attaches a header in the Header of the response like meta data
    res.setHeader('Content-Type','text/html');
    // ? write allows us to write some data to response
    res.write('<html>');
    res.write('<head><title>My first node app</title></head>');
    res.write('<body>Hello from the Node Server</body>');
    res.write('</html>');
    // ? end method tells the server to stop the response body and send it to client and after calling this you cant write any more responses
    res.end();
});

// ? listen will start a process so that code can keep running and server can listen for requests
server.listen(3000)  