const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoAppNew', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
//delete many
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //     console.log(result)
    // });
//delete One
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // });
//findOne and delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndDelete({
    //     _id: new ObjectID("5c45bcc4473d1003d8bd23ab") }).then((result) => {
    //         console.log(result);
    //     });
    db.collection('Users').deleteMany({name: 'Penny'}).then((result) => {
        console.log(result);
    });

    // db.close();
});