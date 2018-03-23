var mongo = require("mongodb").MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var sizeToQuery = process.argv[2];
var sum = 0;
var averageToReturn;

mongo.connect(url,function(err, db) {
   if(err) {
       console.log(err);
   } 
   
   var collection = db.collection('prices');
   collection.aggregate([{
       $match : {
           size: sizeToQuery
       }
   },
   {
       $group: {
           _id:'total',
           total:{$avg:"$price"}
       }
   }]).toArray(function(err, results) {
       if(err) {
           console.log(err);
       }
       console.log(results[0].total.toFixed(2));
   });
   db.close();
});