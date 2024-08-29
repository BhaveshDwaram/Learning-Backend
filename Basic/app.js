// const calc=require('./calculator');
// console.log(calc.add(3,2));
// console.log(calc.subtract(3,2));
// console.log(calc.multiply(3,2));
//console.log(module);


/*
var logger3=require('./logger.js')

logger3.logger2("This is a messge")
// logger3("This is a messge")
console.log(logger3.link);

*/

//path module
/*
var pathobj=require('path'); // Accessing inbuilt path module
console.log(pathobj.parse(__dirname)); // refer node documnetation to know about parth.parse()
*/

// os module 
/* 
const os=require('os');
var total_memory=os.totalmem();
var Free_memory=os.freemem();
console.log("This is the amount of free memory : ",Free_memory," out of total memory of : ",total_memory);
*/

//File System module

/* 
const file_system=require('fs');

// var file_array= file_system.readdirsync('./'); // synchronous way of readdir
// console.log(file_array);
file_system.readdir('./',function(err,files){ // asynchronous way of readdir
    if(err) console.log("Error",err);
    else console.log("Result",files)
        
})

*/

// Event Module

/* Event modue unlike filesystem and os module exports a class called EventEmitter we need to instantiate it inorder to use it 
    where as fs and os module when loaded using require returns object which contain methods and properties exported by those modules 
*/

/* 
const EventEmitter= require('events');
const emitter= new EventEmitter();

//Register a Listener (should be before emitter)
emitter.on('messageLogged',function(){
    console.log('Listener Called');
});

// raise an event (should be after listener)
emitter.emit('messageLogged');
*/

/* 

 here the eventlistener detects the event raised since the listener is before event raiser
 suppouse if event raiser is before the event listener then the listener wont able to detect it becuase
  when emitter.emit('messageLogged') is called, there are no listeners registered for the messageLogged event yet. 
  The event is emitted, but since no listener is there to catch it, it essentially goes unnoticed.The reason the listener
  doesn’t catch the event later is that EventEmitter is designed to handle events synchronously and immediately,
   without storing them for future listeners. If you need to handle events asynchronously or after they occur, 
  you would need a different pattern or approach that supports event queuing or storage.

*/

//Event arguments

const EventEmitter =require('events');
const emitter =new EventEmitter();

emitter.on('logging',(arg)=>{ //argument can have any name arg,e,event etc..
    console.log(`Login Successful !.\nThe login Id is ${arg.id}\nThe  login url is ${arg.url}`);  //template literal
})

emitter.emit('logging',{id:35,url:'https://www.login.com'})