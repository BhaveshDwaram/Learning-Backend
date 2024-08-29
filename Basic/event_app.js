/* 

// case 1:- Without extending EventEmitter class

const EventEmitter =require('events');
const emitter =new EventEmitter();

emitter.on('logging',(arg)=>{ //argument can have any name arg,e,event etc..
    console.log(`Login Successful !.\nThe login Id is ${arg.id}\nThe  login url is ${arg.url}`);  //template literal
})

const logger =require("./event_logger");
logger("This is a test message");

// Here the emitter object  in  event_logger is different from emitter object in event_app 
// so when we call logger function since emitter inside logger function is not same as app 
// so event listener from event_app module is not called by the event raiser in event_logger 
// module as both refer to different emitter objects 


*/

// case 2:- we call events by extending EventEmitter class through other class and there by the object of other class will raise event and 
//listen to the event raised on the object of other class which extends EventEmitter


const Logger= require('./event_logger');
const logger= new Logger();

logger.on('logging',(arg)=>{ //argument can have any name arg,e,event etc..
    console.log(`Login Successful !.\nThe login Id is ${arg.id}\nThe  login url is ${arg.url}`);  //template literal
})

logger.log("This is a test message");
