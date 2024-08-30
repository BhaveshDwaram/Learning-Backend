const mongoose =require('mongoose');


async function connectMongoDb(url){
 mongoose.connect(url)
.then(()=>console.log("Mongo Db connected"))
.catch((err)=>console.log("Mongo Error :-",err));

}
 
module.exports =connectMongoDb