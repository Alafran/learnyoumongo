var mongo = require('mongodb').MongoClient;
var ageToQuery = parseInt(process.argv[2]);
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url,function(err,db) {
   if(err) {
       console.log(err);
   } 
   
   db.collection('parrots').find({age : { $gt: ageToQuery}},{_id:false,name : true, age : true}).toArray(function(err, docs) {
      if(err) {
          console.log(err);
      } 
      
      console.log(docs);
   });
   
   db.close();
});