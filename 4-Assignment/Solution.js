const http = require('http')

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My first node app</title></head>');
        res.write('<body><h1>Nice to meet you</h1><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end(); 
    }
    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', chunks => {
            body.push(chunks)
        });
        req.on('end',() => {
            const parsedBody = Buffer.concat(body).toString();  
            console.log(parsedBody);
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
    if(url === '/users'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My first node app</title></head>');
        res.write('<body><ul><li>Karan</li><li>Kartik</li><li>Mohawk</li></ul></body>');
        res.write('</html>');
        return res.end(); 
    }
});

server.listen(3000);