
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

## Non-blocking I/o

 Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works.


## Asynchronous: 
Asynchronous is executing a callback function. The moment we get the response from the other server or database it will execute a callback function. Callback functions are called as soon as some work is finished and this is because the node.js uses an event-driven architecture. The single thread doesn’t work with the request instead it sends the request to another system which resolves the request and it is accessible for another request.

To implement the concept of the system to handle the request  node.js uses the concept of Libuv.

Libuv is an open-source library built-in C. It has a strong focus on asynchronous and  I/O, this gives node access to the underlying computer operating system, file system, and networking.

Libuv implements two extremely important features of node.js  

- Event loop
- Thread pool

### Event loop
 The event loop contains a single thread and is responsible for handling easy tasks like executing callbacks and network I/O. When the program is to initialize all the top-level code is executed, the code is not in the callback function. All the applications code that is inside callback functions will run in the event loop. EventLoop is the heart of node.js. When we start our node application the event loop starts running right away. Most of the work is done in the event loop.

Nodejs use event-driven-architecture.

- Events are emitted.
- Event loop picks them up.
- Callbacks are called.

###### Credits to __GeeksforGeeks..org__