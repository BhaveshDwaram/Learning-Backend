const express = require('express');
const mongoose =require('mongoose');
const app=express();
const PORT =process.env.PORT||5000

mongoose.connect('mongodb://127.0.0.1:27017/user-data')
.then(()=>console.log("Mongo Db connected"))
.catch((err)=>console.log("Mongo Error :-",err));

// schema for users
const usersSchema = new mongoose.Schema({
        fisrtName :{
            type : String,
            required : true
        },

        lastName :{
            type : String,
            required : false
        },

        email :{
            type : String,
            required : true,
            unique : true
        },

        gender :{
            type : String,
            required : true
        },

        jobTitle : {
            type : String,
            required :false
        }
},{timestamps :true});

const users = mongoose.model("user",usersSchema);

app.use(express.urlencoded({extended : false}));


app.get('/users',async(req,res)=>{
    const allDBusers =await users.find({})
    const html=
    `<ul>
            ${allDBusers.map((eachuser)=>`<li>${eachuser.fisrtName}-${eachuser.email}</li>`).join("")}
    </ul>
    `;
    res.status(200).send(html);
});

app.get('/api/users',async(req,res)=>{
    const allDBusers= await users.find({})
    return(res.status(200).json({allDBusers}));
});


app.post('/api/users',async(req,res)=>{
    const body=req.body;
    if(!body||!body.first_name||!body.last_name||!body.email||!body.gender||!body.job_title){
        return(res.status(400).json({msg : "All fields are required"}))
    }
    try{
        const result = await users.create({
            fisrtName:body.first_name,
            lastName : body.last_name,
            email:body.email,
            gender : body.gender,
            jobTitle:body.job_title
        });

    }
    catch(err){
        return(res.status(500).json({Err :`${err.errmsg}`}));
    }
   
    // console.log(result);
    return(res.status(201).json({msg : "User created Successfully !"}));
});

app.route('/api/users/:id')
.get(async (req,res)=>{
    const dbuser= await users.findById(req.params.id)
    if(!dbuser){
        return(res.status(400).json({Error :"Error user not found !"}));
    }
    return(res.json(dbuser))

}).patch(async(req,res)=>{
    await users.findByIdAndUpdate(req.params.id,{lastName:"changed"});
    res.status(200).json({Success :"updated !"})
}).delete(async (req,res)=>{
     await users.findByIdAndDelete(req.params.id)
     res.status(200).json({Success :"Deleted !"})
});



app.listen(PORT,()=>{
    console.log("Server running on port : ",PORT);
});