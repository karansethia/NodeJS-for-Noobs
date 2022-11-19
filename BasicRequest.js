const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res) => { 


    //? Request has a url method which gets the url of the server it is running on 
    const url = req.url;

    //? res.methid checks if the type of request is get or post
    const method = req.method;


    //? if the url has nothing after / then this code will run (routing request)
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>My first node app</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="mymessage"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end(); 
    }  

    if(url === '/message' && method === 'POST'){
        fs.writeFileSync('message.txt','DUMMY TEXT');
       // res.writeHead(302,{this object should contain all the headrs you want to include});   //? writeHead allows us to write meta info in one go with 302 => this number means redirection
       
       //? Another way of writing meta data
        res.statusCode = 302;
        res.setHeader('Location','/') // this will store meta on the same url
        return res.end();
    }

    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first node app</title></head>');
    res.write('<body>Hello from the Node Server</body>');
    res.write('</html>');
    res.end();
});
server.listen(3000)  
