const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err,client)=>{
    if(err){
       return console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({text:"Eat lunch"}).then((results)=>{ //remove all documents with that property value
    
    //deleteOne
    // db.collection('Todos').deleteOne({text:"Eat lunch"}).then((results) => { //remove the first document that match
    
    //findOneAndDelete
    // db.collection("Todos").findOneAndDelete({completed:false}).then((results)=>{
    //     console.log(results);
    // }, (err) => {
    //     console.log('Unable to connect', err);
    // });

    //exercise
    // db.collection('Users').deleteMany({name: 'Carlos'});
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5d126b3059173333dbbe76c1")
    }).then((results)=>{
        console.log(JSON.stringify(results,undefined,2));
    });


    //close connection
    // client.close();
});