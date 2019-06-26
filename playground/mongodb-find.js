const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err,client)=>{
    if(err){
       return console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //db.collection('Todos').find().toArray().then((docs)=>{ //show all Todos
    // db.collection('Todos').find({completed: false}).toArray().then((docs) => { //show only incomplete
    // db.collection('Todos').find({_id: new ObjectID('5d12646f4203df2f556e5760') }).then((docs) => { //find by id
    //db.collection('Todos').find({}).count().then((count) => { // count the documets
/////////////////////////////////////////// to find all todos, show only incomplete and find by id////////////////////////////////    
    //     console.log('Todos');
    //     //undefined for our filter function and 2 for our spacing
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////For Count method///////////////////////////////////////////
        // console.log(`Todos count: ${count}`);
//////////////////////////////////////////////////////////////////////////////////////        
    db.collection('Users').find({name:'Carlos'}).toArray().then((docs)=>{
        console.log(JSON.stringify ( docs , undefined , 2 ) );
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    //close connection
    // client.close();
});