const {mongoose} = require('./../server/db/mongoose');

const {Todo} = require('./../server/Models/todo');

var id = '115d24c5ed9372f460ca763323';

const {ObjectID} = require('mongodb');



// Todo.find({
//     _id:id
// }).then((todos)=>{
//     console.log('Todos',todos);
// });

// Todo.findOne({
//     _id:id
// }).then((todo)=>{
//     console.log('Todo',todo!=null?todo.toJSON():null);
// });

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }
// else{

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('ID not found');
//     }
//     console.log('Todo by ID', todo.toJSON());
// }).catch((e)=> console.log(e) );

// }

//exercise -------------------------------------------------
const {User} = require('./../server/Models/user');
var userID = '5d1668490aed943cfbe235a2';

if(!ObjectID.isValid(userID)){
    console.log('El id no es valido')
}
User.findById(userID).then((user)=>{
    if(!user){
        return console.log('no se encontro usuario');
    }
    console.log('Usuario:' , user.toJSON());
}).catch((e)=>{
    console.log(e);
})