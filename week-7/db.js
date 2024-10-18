const mongoose = require('mongoose');
const Schema =  mongoose.Schema;
const ObjectId= mongoose.ObjectId;

const User= new Schema({
    userName:String,
    email:String,
    password:String,
})

const Todo=  new Schema({
    id:ObjectId,
    title :  String,
    done:Boolean
})

const  UserModel = mongoose.model('users',User);
const TodoModel = mongoose.model('todos',Todo);

module.export= {
    UserModel:UserModel,
    TodoModel:TodoModel
}


