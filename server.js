const express=require("express");
const fs = require('fs') ;
const verify = require('./verifyTime');
const app=express();
const PORT=2525;

app.get('/HomePage.html',verify,(req,res)=>{
    fs.readFile('./HomePage.html','utf8',(err,data)=>{
        err?res.end('SOMETHING WRONG')&&console.error(err) :res.end(data);
    })
})

app.get('/OurServices.html',verify,(req,res)=>{
    fs.readFile('./OurServices.html','utf8',(err,data)=>{
        err?res.end('SOMETHING WRONG')&&console.error(err) :res.end(data);
    })
})

app.get('/ContactUs.html',verify,(req,res)=>{
    fs.readFile('./ContactUs.html','utf8',(err,data)=>{
        err?res.end('SOMETHING WRONG')&&console.error(err) :res.end(data);
    })
})
app.listen(PORT,(error)=>{
    error? console.log(error):console.log(`server is running on port ${PORT}...`)
})