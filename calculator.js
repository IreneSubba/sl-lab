const express = require("express");
const bodyParser = require("body-parser");
const app= express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
   // console.log(req.body.num1);
   var num1=Number(req.body.num1);
   var num2=Number(req.body.num2);
   var add=num1+num2;
   var sub= num1 - num2;
   var div= num1/num2;
   var mul= num1*num2;
    res.send("Addition = "+add  + " Subtraction = "+ sub +" Multiplication: "+ mul +" Division: "+ div);
   
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});