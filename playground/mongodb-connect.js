const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoAppNew', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert Todo', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })
    // db.collection('Users').insertOne({
    //     name: 'Penny',
    //     age: '59',
    //     location: 'Farnham Common'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert User', err)
    //     }
    //     console.log(result.ops[0]._id.getTimestamp())
    // })

    db.close();
});
