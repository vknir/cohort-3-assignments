const { Command } = require('commander');
const program = new Command();
const path = require('path');
const fs= require('fs')


const pathToJSON= path.join(__dirname, '/todos.json');




if( !fs.existsSync(pathToJSON))
{
    fs.writeFileSync('todos.json',"[]");
}


function readTodos()
{
    console.log('inside readTodods')
    
    let data = fs.readFileSync(pathToJSON, 'utf-8');
    data=JSON.parse(data)
    return (data);
    
}

function updateTodoJson(todo)
{
    let todoString =JSON.stringify(todo);
    
    try{
    fs.writeFileSync(pathToJSON, todoString);
    }catch(err)
    {
        console.log(err);
    }
}


program
    .name('todo')
    .description('A ToDo CLI')
    .version('0.1.0');


program
    .command('add')
    .description('Adds the given item  in the todos.json')
    .argument('<item>', 'item to be added to the list')
    .action((item)=>{
        
    let newTodo={
        item: `${item}`,
        done: false,
    };
    
    let todo= readTodos();
    todo.push(newTodo)
    
    updateTodoJson(todo);
   
})

program.command('delete')
.description('Delete a to do item')
.argument('<Item name>', 'name of item to be deleted')
.action((item)=>{
    let todo= readTodos();
    todo=todo.filter( (todoItem)=>{
        return todoItem.item != item; 
    })
    updateTodoJson(todo);
    
})

program.parse();    