const express = require('express');
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken");


const JWT_SECRET="ilovemilfs";
const app= express();
app.use(bodyParser.urlencoded({extended : false}));

let users=[];


app.post("/sign-up",(req, res)=>{

    const name=req.body.username;
    const password= req.body.password;

    const newUser={
        username:name,
        password:password,
    }

    users.push(newUser)
    res.send({
        message: "new user added"
    })
    
})

app.post("/login", (req, res)=>{

    const username=req.body.username;
    const password=req.body.password;

    // console.log(username +' '+password)

    let isUser=[];

    isUser= users.filter( (iterator)=>{
       return( iterator.username == username && iterator.password ==password); 
    })

    
    if( isUser.length < 1)
    {
        res.send({
            message: "Invalid credentials",
        })
    }
    else{
        const username=isUser[0].username;
        const token= jwt.sign( {username},JWT_SECRET)
            

        res.json({
            token: token,
    })
    }
})

function auth(req, res, next)
{
    const token = req.headers.token;
    console.log(token);
    if(token);
    jwt.verify( token , JWT_SECRET, (err, decoded)=>{
        if( err)
        {
            res.status(401).send({
                message:"Unauthorized"
            })
        }
        else{
            req.user=decoded;
            next();
        }
    })

}

app.get("/me", auth, (req, res)=>{
    res.send({
        username: req.user.username,
    })
})


app.get("/",(req, res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.listen(3000,()=>{
    console.log(`Server is running`);
})
