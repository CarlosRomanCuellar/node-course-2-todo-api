//import the mongodb
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


//make the conection to the URL and specify the callback function
MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err,client)=>{
    if(err){
       return console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // //adding an element to the Todos
    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed: false
    // },(err, result)=>{
    //     if(err){
    //         return console.log('unable to insert todo ',err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    //Insert new doc into Users(name, age, location)
    db.collection('Users').insertOne({
        name:'Carlos',
        age:24,
        location: 'Tijuana'
    },
    (err,result)=>{
        if(err){
            return Console.log('unable to insert user ', err);
        }
        //get the date
        //console.log(result.ops[0]._id.getTimestamp());
    });


    //close connection
    client.close();
});