// (function(exports,require,module,__filename,__dirname){ // nodejs module wrapper function all the code is first wrapped inside this function

    console.log("This is Directory name : ",__dirname);
    console.log("This is File name : ",__filename);

var url="http://mylogger.io/log";
function log(message){
    console.log(message);
}
module.exports.logger2=log;// here the function log is exported via export object as logger2 function.. so log function outside module can
                           // be accessed through looger2 function.
// module.exports=log;
module.exports.link=url;
// }
// )