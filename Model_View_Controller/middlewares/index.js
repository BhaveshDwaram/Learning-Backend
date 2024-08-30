const fs= require('fs');

function logReqRes(filename){
    return((req,res,next)=>{
        fs.appendFile(filename,`${Date.now()} : ${req.ip} :${req.method} : ${req.path} :  new request received ...\n`,(err,data)=>{
            if(err){
                console.log(err);
            }
             console.log("Hi i am middle ware 1");
            req.myusername="Bhavesh Dwaram"
            next();
            })
    });
}

module.exports=logReqRes;