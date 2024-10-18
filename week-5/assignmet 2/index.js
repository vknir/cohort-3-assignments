const express = require('express');
const app =express();

let count=0;

function middleware(req, res, next)
{
    count++;
    console.log(`Number of times server is accsessed  is ${count}`);
    next();
}

app.use(middleware);

app.get("/", (req, res)=>{

})

app.get("/multiply");

app.get("/subtract");

app.get("/divide");

app.get("add");

app.get("/show", (req,res)=>{
    res.send({count: count});
})


app.listen(3000,()=>{
    console.log(`Server's running`);
})