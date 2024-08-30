const users =require('../models/user');

async function handleGetAllUsers(req,res) {
    const allDBusers= await users.find({})
    return(res.status(200).json({allDBusers}));
    
}

async function handleGetUserById(req,res) {
    const dbuser= await users.findById(req.params.id)
    if(!dbuser){
        return(res.status(400).json({Error :"Error user not found !"}));
    }
    return(res.json(dbuser))
}

async function handleUpdateUserById(req,res){
    await users.findByIdAndUpdate(req.params.id,{lastName:"changed"});
    res.status(200).json({Success :"updated !"})
}

async function handleDeleteUserById(req,res) {
    await users.findByIdAndDelete(req.params.id)
    res.status(200).json({Success :"Deleted !"})
}

async function handleCreateNewUser(req,res) {
    const body=req.body;
    if(!body||!body.first_name||!body.last_name||!body.email||!body.gender||!body.job_title){
        return(res.status(400).json({msg : "All fields are required"}))
    }
    
         const result = await users.create({
            fisrtName:body.first_name,
            lastName : body.last_name,
            email:body.email,
            gender : body.gender,
            jobTitle:body.job_title
        }); 

    // console.log(result);
    const res_id =result._id;
    return(res.status(201).json({msg : "User created Successfully !", id : `${res_id}`}));
    
}
module.exports={
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
};