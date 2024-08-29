const req = require("express/lib/request");

const express= require('express');
const app=express();
const port =5000;

app.get('/',(req,res)=>{
    res.end(`Hello ${req.query.name} this is home page`);
})

app.get('/about',(req,res)=>{
    res.end(`Hello ${req.query.name} this is about page`);
})

app.get('/signup',(req,res)=>{
    res.end(`Hello ${req.query.name} with id ${req.query.id} this is signup page`);
})

app.post('/signup',(req,res)=>{
    res.end(`Sign Up successful !`);
})

app.listen(port,()=>{
    console.log(`Server started listening at port no ${port}...`);
})