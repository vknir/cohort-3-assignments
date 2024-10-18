const express = require('express')
const bodyParser =require('body-parser')
const path = require('path');

const app= express();
const  port =3000;

app.use(bodyParser.urlencoded({extended : true}));

app.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})



let todo=[]

function deleteItem(id)
{
    todo = todo.filter( (todoItem)=>{
        return todoItem.id !=id;
    })
    updateList();
}

function updateList()
{
    const listContainer= document.getElementById('list-container');
    listContainer.innerHTML="";
    for(let i=0;i < todo.length;i++)
    {
        let div= document.createElement('div');
        let p= document.createElement('p');
        p.innerHTML= todo[i].item;
        let button = document.createElement('button');
        button.innerHTML='Delete';
        button.setAttribute("onclick",`deleteItem(${todo[i].id})`)
        div.appendChild(p);
        div.appendChild(button);
        listContainer.appendChild(div);
    }
}


function addItem()
{
   const item = document.querySelector('input');
   const id= todo.length;

   const newItem ={
    item : item.value,
    id : id,
   }
   console.log( typeof(newItem.item))
   todo.push(newItem)

   document.querySelector('input').value="";

   updateList();
}