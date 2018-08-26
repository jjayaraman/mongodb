var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

const url = "mongodb://localhost:27017";
const options = { useNewUrlParser: true }

MongoClient.connect(url, options, (error, client) => {

    assert.equal(error, null);
    const db = client.db('week3');
    var collection = db.collection('test');

    //collection.insertOne({ "name": "jay" });

    collection.find({}).toArray((error, docs) => {
        assert.equal(error, null);

        console.log(docs);
        client.close();

    });

})