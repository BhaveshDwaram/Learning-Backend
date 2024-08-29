const express = require('express');
const users =require('./MOCK_DATA.json');
const app=express();
const port=process.env.PORT || 5000;
const fs =require('fs');

// Middleware-Plugin
app.use(express.urlencoded({extended : false})); // This middleware will create an object and parse url if content type is "www-form-urlencoded"  
                                                //  and copy that to the object and add into req.body

app.use((req,res,next)=>{
    fs.appendFile("./intermediate/miidleware_logs.txt",`${Date.now()} : ${req.ip} :${req.method} : ${req.path} :  new request received ...\n`,(err,data)=>{
    if(err){
        console.log(err);
    }
     console.log("Hi i am middle ware 1");
    req.myusername="Bhavesh Dwaram"
    next();
    })
})

app.use((req,res,next)=>{
    console.log(req.headers);
    res.setHeader("X-Myname","Bhavesh Dwaram")// changing  response headers and  always add "X-" starting of the name of custom header for good practice
    console.log("Hi i am middle ware 2",req.myusername); // This shows that middleware can modify request object .
    // return(res.json({msg : "Sorry! we cannot process the request right now !"})) // This will break the rrquest response cycle and this show middleware has acess to response obj
    next();
})





//          <-----------------------Routing Starts Here-------------------->

// www.mockaroo.com for getting  fake data in json form
app.get('/users',(req,res)=>{
    const html = 
    `<ul>
            ${users.map((user)=> `<li>${user.first_name} </li>`).join("")}
    </ul>`;
    res.send(html);
});

//REST API end points

app.get('/api/users',(req,res)=>{
   res.json(users);    
});


// app.get('/api/users/:id',(req,res)=>{
//     const id= Number(req.params.id);
//     const user =users.find((user)=> user.id===id);
//     res.json(user);    
    
// });

// app.patch('/api/users/:id',(req,res)=>{
//     // TODO :- Update User
//    return  res.json({status : "pending"});
// })

// app.delete('/api/users/:id',(req,res)=>{
//     // TODO :- Delete User
//    return  res.json({status : "pending"});
// })



app.route('/api/users/:id'
).get((req,res)=>{
    const id= Number(req.params.id);
    const user =users.find((user)=> user.id===id);
    if(!user) return (res.status(404).json({staus :"User Not Found !"}));
    res.json(user);   

}).patch((req,res)=>{
    // TODO :- Update User
    const userid =parseInt(req.params.id);
    const updates =req.body;
    const user =users.find(user=>user.id===userid);
   if(user){
    Object.assign(user,updates);
   }
    else{
        return res.status(404).json({ message: 'User not found' });
    }
   return  res.json({status : "pending"});

}).delete((req,res)=>{
    // TODO :- Delete User
   return  res.json({status : "pending"});
});


 

app.post('/api/users',(req,res)=>{
    // TODO :- Create User
    const body=req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return(res.status(400).json({msg : "All fields are required"}))
    }
    console.log(body);
    users.push({id:users.length+1,...body}); // This is spread operator which creates new object and copies all properties of body are in new object and we append users.length+1 as id to it 
    fs.writeFile('./intermediate/MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return  res.status(201).json({status : "SUCCESS!",id:users.length});
    });
   
});


 
app.listen(port,()=>{
    console.log(`Server Listening on port ${port}...`);
})