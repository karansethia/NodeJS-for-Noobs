
# NodeJS for Noobs

A detailed repo on NodeJS. In this repository you'll find some of the common Node modules and programs being used. This repo can be used for understanding purposes

Install the package and use [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) extension in VSCode for best experience with comments made to understand specific part of code under the comment


## Installation

First change to the file directory : 

```cd <directory> ```

And then simply run on your terminal : 

``` npm install ```

and it will install all the necessary packages

## How to follow this course : 
- All files and Folders are marked with number so just follow with them
- Some amount of theory can be found in this Readme file
- **Running the scripts in an easy way**

    ```npm run section-<sectionNumber>```

    for example, running *1-BasicResponse.js*

    ```npm run section-1```

## A Brief intro to NodeJS
Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!
It runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.

### What NodeJS can do 
- Node.js can generate dynamic page content
- Node.js can create, open, read, write, delete, and close files on the server
- Node.js can collect form data
- Node.js can add, delete, modify data in your database

## Working of NodeJS
 Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

Node.js basically works on two concept

- Asynchronous
- Non-blocking I/O

## Non-blocking I/O

 Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works.


## Asynchronous: 
Asynchronous is executing a callback function. The moment we get the response from the other server or database it will execute a callback function. Callback functions are called as soon as some work is finished and this is because the node.js uses an event-driven architecture. The single thread doesn’t work with the request instead it sends the request to another system which resolves the request and it is accessible for another request.

To implement the concept of the system to handle the request  node.js uses the concept of Libuv.

Libuv is an open-source library built-in C. It has a strong focus on asynchronous and  I/O, this gives node access to the underlying computer operating system, file system, and networking.

Libuv implements two extremely important features of node.js  

- Event loop
- Thread pool

### Event loop
In Node.js, the event loop is a piece of the runtime that listens for events and dispatches callbacks to handle those events. It plays a central role in the non-blocking, event-driven I/O model that is the foundation of Node.js.

Here's how the event loop works:

- When a Node.js program starts, the event loop is created and starts running.
- The event loop has a queue of events and callbacks that need to be handled. These events and callbacks are added to the queue by the Node.js runtime, external libraries, and the application code.
- The event loop listens for events and, when one occurs, it adds the corresponding callback to the queue.
- The event loop continually processes the event queue, executing each callback in turn.
- When the queue is empty, the event loop waits for new events to be added, at which point it continues processing the queue.

The event loop is what enables Node.js to be efficient and scalable. It allows the runtime to handle many concurrent events without using up too many resources, by only executing one callback at a time and waiting for I/O operations to complete asynchronously.

![Nodejs Architecture](./nodejsarchi.png)

## NodeJS Modules
In Node.js, Modules are the blocks of encapsulated code that communicates with an external application on the basis of their related functionality. Modules can be a single file or a collection of multiples files/folders. The reason programmers are heavily reliant on modules is because of their re-usability as well as the ability to break down a complex piece of code into manageable chunks.

Modules are of three types:

- Core Modules
- Local Modules
- Third-party Modules

## The HTTP Module
The http module is a built-in module in Node.js that provides functions for creating an HTTP server or client.

To use the http module, you need to require it in your Node.js script:

const http = require('http');

With the http module, you can create an HTTP server that listens for requests and sends responses, or you can create an HTTP client that makes requests to other servers. 

## The Path module
The path module in Node.js provides a way to work with file and directory paths. It can be used to parse, normalize, and join file paths, as well as to determine the relative location of one file to another. Some common methods of the path module include:
 - basename(), which returns the last portion of a file path, 
 - dirname(), which returns the directory portion of a file path, and 
 - join(), which joins multiple parts of a file path together. 
 Additionally, the path module provides methods for working with file extensions, such as extname(), which returns the file extension of a file path, and parse(), which returns an object with properties representing the different parts of a file path.

## The OS Module
The os module in Node.js provides a way to interact with the underlying operating system. It provides a number of useful methods for retrieving information about the system, such as:

- os.arch() returns a string identifying the operating system architecture for which the Node.js binary was compiled (e.g. 'x64' for a 64-bit system).
- os.cpus() returns an array of objects containing information about each logical CPU core.
- os.endianness() returns a string identifying the endianness of the CPU ('BE' for big-endian or 'LE' for little-endian).
- os.freemem() returns the amount of free system memory in bytes.
- os.homedir() returns the home directory of the current user.
- os.hostname() returns the hostname of the operating system.

### Methods to recieve data in NodeJS
In HTTP, the GET, POST, PUT, and DELETE methods are used to retrieve or modify data on a server. These methods are often used in conjunction with HTTP APIs and web applications.

Here's a brief overview of each method:

- GET: The GET method is used to retrieve data from the server. It is the most common HTTP method, and it is used when you enter a URL in your web browser or click on a link.

- POST: The POST method is used to send data to the server, usually to create or update a resource. For example, when you submit a form on a website, the form data is usually sent to the server using the POST method.

- PUT: The PUT method is used to update a resource on the server. It replaces the existing data with the data you send in the request.

- DELETE: The DELETE method is used to delete a resource on the server.

These methods can be used in Node.js by using the http module to create an HTTP server or client, or by using a third-party library like axios or request.

### Events in NodeJS
In Node.js, an event is an action or occurrence that is detected by the program, typically triggered by user input, a network request, or the completion of a task. Events are an important part of many Node.js programs, and are used to trigger functions or methods in response to certain actions.

Node.js includes a powerful event-driven architecture and a module called "events" that allows you to create, fire, and listen for events in your program.

## NPM
npm (short for Node Package Manager) is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. npm makes it easy for developers to share and reuse code, and to manage the dependencies of their projects.

With npm, developers can easily install and manage packages (collections of code written by other developers) that can be used in their own projects. These packages can include anything from utility libraries and frameworks to tools for testing and building. npm also makes it easy for developers to specify and manage the versions of the packages their projects depend on, which helps to ensure that their projects continue to work as expected even as the packages they depend on are updated.

npm is typically installed automatically when Node.js is installed, and it can be used from the command line to install, update, and manage packages. It also include a command line tool to easily create and manage Node.js projects, and a website that allows developers to search for and download packages.

Overall, npm is a powerful tool that makes it easy for developers to manage their dependencies and reuse code, which can help to save time and improve the quality of their projects. To install a package using npm just use the below snippet

``` npm <package-name> ```
#### Using Package as a Production and Development dependency
In npm, the --save-dev and --save options are used when installing packages to specify the type of dependency that the package has on the project.

- --save is used to add a package as a production dependency. This means that the package is needed for the project to run in a production environment. For example, if a package is required for the application to function, it should be added using --save.

- --save-dev is used to add a package as a development dependency. This means that the package is needed for development and testing purposes, but it is not required for the project to run in a production environment. For example, if a package is used for testing or building, it should be added using --save-dev.

In general, --save is used for packages that are needed to run the application, while --save-dev is used for packages that are needed for development and testing, but not for running the application.

When installing a package, you can also use -D as a short form for --save-dev and -S as a short form for --save in the command.

For example:

```npm install <package-name> --save ```
or

```npm install <package-name> -S```

and

```npm install <package-name> --save-dev ```
or

```npm install <package-name> -D```

These options will specify the package as a production dependency or a development dependency in package.json file, which is used to manage the dependencies of a Node.js project.

# Express Framework
Express.js is a web application framework for Node.js. It provides a simple and flexible way to create web applications and APIs using JavaScript. It is built on top of the Node.js HTTP module, and it allows developers to easily handle HTTP requests and responses, define routes, and perform other common web development tasks. Express.js is widely used in the Node.js ecosystem and is often used in conjunction with other popular JavaScript libraries and frameworks such as React and Angular.

### Advantages of Express Framework
Express.js provides several functionalities to help simplify the development of web applications and APIs:

Routing: Express.js allows developers to define and handle different routes for different HTTP methods (e.g. GET, POST, PUT, DELETE) and URIs.

Middleware: Express.js provides a way to handle middleware functions, which can be used for tasks such as authentication, error handling, and data parsing.

Templating: Express.js can be used in conjunction with template engines like Jade, EJS, and Handlebars to dynamically generate HTML pages.

Handling Requests and Responses: Express.js makes it easy to handle incoming requests, extract data from them, and send appropriate responses.

Serving static files: Express.js can serve static files like images, CSS, and JavaScript, which can be used to build client-side functionality.

Database Integration: Express.js can be integrated with various databases like MongoDB, MySQL, PostgreSQL and so on.

Error Handling: Express.js includes a built-in error handling middleware that makes it easy to handle errors that occur in route handlers and middleware.

These functionalities along with many other features makes Express.js a powerful and widely used framework for building web applications and APIs.

## Templating Engines
A template engine is a tool or software library that allows developers to define templates for generating dynamic HTML, XML, or other markup languages. These templates usually contain placeholders that are replaced with actual data when the template is rendered.

Template engines are often used in web development to separate the presentation logic (HTML, CSS, etc.) from the business logic (JavaScript, server-side code, etc.) in order to make the code more maintainable and reusable.

Template engines are typically used in conjunction with web frameworks like Express.js, Ruby on Rails, and Django, and they allow developers to create views that can be easily rendered with different data.

There are many template engines available, each with its own syntax and features. Some popular template engines for Node.js include Pug, EJS, and Handlebars, and for other languages, like Python, Jinja2, Django Templates.

### PUG, Express Handlebars and EJS
Pug, Express Handlebars, and EJS are all template engines that can be used with Express.js to dynamically generate HTML pages.
#### PUG
Pug is a high-performance template engine for Node.js. It uses a clean and simple syntax, and it compiles the templates to JavaScript functions. One of the advantages of Pug is that it is easy to read and understand, making it a good choice for beginners. 
Advantages of Pug:

Clean and simple syntax
High performance
Good for beginners
#### Express Handlebars
Express Handlebars is a template engine that is based on the Handlebars template engine. It is designed to work with Express.js and it allows developers to use the Handlebars syntax to create templates. One of the advantages of Express Handlebars is that it is easy to integrate with existing Handlebars projects.
Advantages of Express Handlebars:

Familiar Handlebars syntax
Easy to integrate with existing Handlebars projects

#### EJS
EJS is a simple and lightweight template engine for Node.js. It uses a familiar syntax that is similar to that of JavaScript, which makes it easy to learn for developers who are familiar with the language. One of the advantages of EJS is that it is easy to use and does not require any additional configuration.
Advantages of EJS:

Simple and lightweight
Familiar JavaScript-like syntax
No additional configuration required

## Project still in development 

###### Credits to __GeeksforGeeks.org__ and ChatGPT