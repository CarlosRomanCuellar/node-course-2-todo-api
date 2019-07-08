//the DB confing has been move to mongoose.js

var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./Models/todo');
var {User} = require('./Models/user')

//---------------------------------------------------MODELS------------------------------------------------------------

// moved to todos.js and user,js

//------------------------------------------------------------------------------------------------------------------------

//---------------------------------------------------Express config----------------------------------------------------

var app = express();

app.listen(3000, ()=>{
    console.log('Started at port 3000');
});

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text:req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});



//-----------------------------------------------------------------------------------------------------------------------













//------------------------------------------------------------------------------------------------------------------------
/*
var newTodo = new Todo({
    text:'Cook dinner'
});

newTodo.save().then((doc)=>{
    console.log("saved Todo ", doc);
}, (e)=>{
    console.log("unable to save todo");
});
*/

/*
var otherTodo = new Todo({
    text:'Feed the cat',
    completed:true,
    completedAt:123
});

otherTodo.save().then((doc)=>{
    console.log(JSON.stringify(doc,undefined,2));
},(err)=>{
    console.log('unable to save ', err);
});
*/

/*
var otherTodo = new Todo ({
    text:'      Edit this    '
});
otherTodo.save().then((doc)=>{
    console.log(JSON.stringify(doc,undefined,2));
},(err)=>{
    console.log('unable to save ', err);
});*/

// var user = new User({
//     email:'c.roman.5458@gmail.com'
// });

// user.save().then((doc)=>{
//     console.log('user saved ', doc);
// },(err)=>{
//     console.log('unable to save user', err);
// });

