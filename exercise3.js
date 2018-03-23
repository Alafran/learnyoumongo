var mongo = require("mongodb").MongoClient;
var ageToQuery = parseInt(process.argv[2]);

mongo.connect('mongodb://localhost:27017/learnyoumongo',function(err, db) {
   if(err) {
       console.log(err);
   } 
   db.collection('parrots').find({age:{$gt:ageToQuery}}).toArray(function(err,docs) {
       if(err) {
           console.log(err);
       }
       console.log(docs);
   });
   db.close();
});