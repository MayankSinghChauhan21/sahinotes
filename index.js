const express=require('express');
const app=express();
const port=8000;

app.listen(port,(err)=>{
    if(err){
        console.log("Error is running on server:",err)
        return;
    }
    console.log("server is running on port:8000");
});