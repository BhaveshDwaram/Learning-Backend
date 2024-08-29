/*

// case 1:- Without extending EventEmitter class

const EventEmitter =require('events');
const emitter =new EventEmitter();

function logger(message){
    console.log(message);
    emitter.emit('logging',{id:35,url:'https://www.login.com'});
}
module.exports=logger;

// Here the emitter object  in  event_logger is different from emitter object in event_app 
// so when we call logger function since emitter inside logger function is not same as app 
// so event listener from event_app module is not called by the event raiser in event_logger 
// module as both refer to different emitter objects 

*/

// case 2:- we call events by extending EventEmitter class through other class and there by the object of other class will raise event and 
//listen to the event raised on the object of other class which extends EventEmitter


const EventEmitter =require('events');

class Logger extends EventEmitter{
    log(message){
        console.log(message);
        this.emit('logging',{id:35,url:'https://www.login.com'});
    }
}

module.exports=Logger;
