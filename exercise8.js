var mongo = require("mongodb").MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var ageToQuery = parseInt(process.argv[2]);

mongo.connect(url,function(err, db) {
   if(err) {
       console.log(err);
   } 
   
   var collection = db.collection('parrots');
   collection.count({age: {$gt:ageToQuery}},function(err,count) {
      if(err) {
          console.log(err);
      } 
      console.log(count);
      db.close();
   });
   
});