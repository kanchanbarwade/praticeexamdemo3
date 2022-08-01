const express= require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send(

        "<h1>Exam Demo</h1>"
        +"<h2></h2>"
    ) 
        
        
 });


 app.get("/aboutus",(req,res)=>{
    res.send(

        "<h1>About Us</h1>"
        +"<h2>HTMLZ JS </h2>"
    ) 
        

        
 });

 const server=app.listen(9000);
 console.log("listen server at 9000");