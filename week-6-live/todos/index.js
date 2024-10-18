const express= require("express");
const jwt= require('jsonwebtoken');
const path = require('path')

const JWT_SECRET= "balle balle";

const app=express();


const bodyParser = require("body-parser");



let user=[];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname ,'public')))

app.get("/", (req, res)=>{
    res.render('index.html');
})


app.post("/signup", (req, res)=>{
    
    const username= req.body.username;
    const password = req.body.password;
    
    user.push({
        username: username,
        password: password,
        todos:[]
    });

    res.json({
        message:"You are signed up"
    })
})

app.post("/login", (req, res)=>{

   
    const  username=req.body.username;
    const password = req.body.password;

    

    const isUser = user.find( user=> user.username === username && user.password === password)

    
    if( isUser)
    {
        const token= jwt.sign( {
            username: isUser.username
        },JWT_SECRET);

        res.json({
            token: token
        })
    }
    else
    {
        res.json({
            message: "Invalid Credentials"
        })
    }
   
})

function auth(req, res, next){
    const  token =req.headers.token;
    
    
    
        const isTokenValid= jwt.verify(token, JWT_SECRET, (err, decoded)=>{
            if(err)
            {
                res.json({
                    message:"Invalid Token",
                  })
            }
            else{
                
                const currentUser = user.find( iterator => iterator.username === decoded.username) 
                req.user=currentUser
                next();
            }
        });
        
        
   
    
        
  
}


app.get("/display",auth,(req,res)=>{
    
    res.json({
        username:req.user.username,
        todos: req.user.todos,
    })
})

app.post("/addItem",auth,(req,res)=>{
    
    const task=req.body.task;


    let currentUser= user.find( (iterator)=> iterator.username === req.user.username)
    

    currentUser.todos.push({
        task:task,
        done:false,
    } )

    console.log(user);
})

app.listen(3000);