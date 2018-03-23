var mongo = require("mongodb").MongoClient;
var url = 'mongodb://localhost:27017/' + process.argv[2];
var collectionName = process.argv[3];
var idToRemove = process.argv[4];

mongo.connect(url,function(err,db) {
   if(err) {
       console.log(err);
   } 
   var collection = db.collection(collectionName);
   
   collection.remove({_id:idToRemove},true);
   db.close();
});