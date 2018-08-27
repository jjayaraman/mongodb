var commandLineArgs = require('command-line-args');
var MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017"

var options = commandLineOptions();

function commandLineOptions() {

    var cli = commandLineArgs([{ name: "name", alias: "n", type: String }]);

    var options = cli.parse()

    if (!("name" in options)) {
        console.log(cli.getUsage({ title: "Usage", description: "Enter name" }));
        process.exit();
    }

    return options;
}


MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {

    const db = client.db("week3");
    const collection = db.collection("test");

    var query = {};
    var projection = { _id: 0 };

    var cursor = collection.find(query);
    cursor.project(projection);

    cursor.forEach(
        function(doc) {
            console.log("doc : " + JSON.stringify(doc));
        },
        function(error) {
            if (error) {
                console.log("error : " + error);
            }
            console.log("finsinhed...")
            client.close();
        }
    )

})