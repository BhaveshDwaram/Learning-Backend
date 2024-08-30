const express = require('express');
const userRouter = require('./routes/user');
const connectMongo =require('./connection');
const logReqRes =require('./middlewares/index');

const app=express();
const PORT =process.env.PORT||5000

connectMongo('mongodb://127.0.0.1:27017/user-data');


app.use(express.urlencoded({extended : false}));
app.use('/api/users',userRouter);
app.use(logReqRes("log.txt"));


// app.get('/users',async(req,res)=>{
//     const allDBusers =await users.find({})
//     const html=
//     `<ul>
//             ${allDBusers.map((eachuser)=>`<li>${eachuser.fisrtName}-${eachuser.email}</li>`).join("")}
//     </ul>
//     `;
//     res.status(200).send(html);
// });




app.listen(PORT,()=>{
    console.log("Server running on port : ",PORT);
});