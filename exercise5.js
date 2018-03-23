var mongo = require("mongodb").MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var firstName = process.argv[2];
var lastName = process.argv[3];
var docToInsert = {firstName:firstName,lastName:lastName};

mongo.connect(url, function(err,db) {
   if(err) {
       console.log(err);
   } 
   
   var collection = db.collection('docs');
   
   collection.insert(docToInsert,function(err, data) {
      if(err) {
          console.log(err);
      } 
      
      console.log(JSON.stringify(docToInsert));
      db.close();
   });
});