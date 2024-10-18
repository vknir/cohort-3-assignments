const express= require('express');

const app= express();

function middleware(req, res, next)
{
    console.log(req.method);
    console.log(req.orignalUrl);
    console.log( Date.now());

    next();
}

app.use( middleware);

app.get("/multiply",(req, res)=>{
    const a = Number(req.query.a);
    const  b= Number(req.query.b);
    console.log(a*b);
    res.send(a*b)
    
})

app.get("/divide?",(req, res)=>{
    res.send(req.query.a / req.query.b)
})

app.get("/subtract?", (req, res)=>{
    res.send(req.query.a - req.query.b)
})

app.get("/add?", (req, res)=>{
    res.send(req.query.a + req.query.b)
})

app.listen(3000,()=>{
    console.log('Server running ')
});