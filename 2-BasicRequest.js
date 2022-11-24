const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res) => { 


    //? Request has a url method which gets the url of the server it is running on 
    const url = req.url;

    //? req.method checks if the type of request is get or post
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
        const body = [];  // this variable is used for storing the chunk of data
        
        
        //? Listening to events to get data from user using req.on('data') method
        req.on('data',(chunk) => {
            console.log(chunk);   //!  <Buffer 6d 79 6d 65 73 73 61 67 65 3d 68 69 2b 74 68 65 72 65> this is the output and as you can see we cant work with this data, thats why we need to store it in a buffer and convert it into a string
            body.push(chunk);
        });


        //? req.on('end') is an event listener that will be fired when server is done parsing incoming data or request
        return req.on('end',() => {
            const parsedBody = Buffer.concat(body).toString();  // this will create a new buffer and add all the the chunks inside from inside the body  
            console.log(parsedBody);


            const recievedMessage = parsedBody.split('=')[1];  //! mymessage=hi => will grap the content of message
    
    
            //fs.writeFileSync('message.txt',recievedMessage); => this will block the code till the message.txt fill is written
            fs.writeFile('message.txt', recievedMessage, err => {
                // this callback will execute once the recieved message is written and we can handle errors in here as well
                console.log(err);
                // res.writeHead(302,{this object should contain all the headrs you want to include});   //? writeHead allows us to write meta info in one go with 302 => this number means redirection
                //? Another way of writing meta data
                res.statusCode = 302;
                res.setHeader('Location','/') // this will store meta on the same url
                return res.end();
            })
        });

      
    }

    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first node app</title></head>');
    res.write('<body>Hello from the Node Server</body>');
    res.write('</html>');
    res.end();
});
server.listen(3000)  
