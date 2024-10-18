/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor()
  {
    this.list =[];
  }
   add( item)
   {
     this.list.push(item)
   }

   remove(id)
   {
     this.list.splice(id,1);
   }

   update(id, item)
   {
    if( id < this.list.length)
      this.list[id]=item
   }

   getAll()
   {
    return this.list
   }

   get(id)
   {
    if(id < this.list.length)
       return this.list[id]
    return null;
   }

   clear()
   {
    this.list=[]
   }
}

module.exports = Todo;
