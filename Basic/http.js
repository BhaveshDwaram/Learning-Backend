// const http=require('http');
// const server =http.createServer();// creates a web server and this server is an eventemitter

// server.on("connection",(socket)=>{
//     console.log("New Connectikon Found");
// })

// server.listen(3000);
// console.log("Listening on Port 3000...");


// better way
const http=require('http');
const server =http.createServer((req,res)=>{  // event listener can be directly given as argument call back function to create server
    if(req.url==="/"){
        res.write("Hello World !");
        res.end();
    }

    if(req.url==="/api/pages"){
        res.write(JSON.stringify([1,2,3,4]));
        res.end();
    }
});

server.listen(5000);
console.log("Listening on Port 5000...");

// here in this method we need to add more routes linearly in call back function

// express js is the framework of node js which help in better handling of the routes of the web server etc..
// This express is internally built on top http module in node
