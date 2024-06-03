const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.listen(3000,()=>{

  console.log("server is running on port 3000");
})

app.get('/',(req,res)=>{
    res.send("Hello ")
})

mongoose.coonect("mongodb+srv://praneeth:grp123@cluster.jxwk423.mongodb.net/?retryWrites=true&w=majority&appName=Cluster")
.then (()=>{
  console.log("connected to db");
})

.catch((err)=>{
  console.log(err);
})