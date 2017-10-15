const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/mydb"


module.exports = {
	createJob : function(obj){
		MongoClient.connect(url,function(err,db){
			if(err){
				console.log(err);
			}
			else{
				var collection = db.collection('model');
				collection.insert(obj,function(err,resp){
					if(err){
						console.log(err);
					}
					else{
						console.log('' + resp.insertedCount + ' job(s) entered');
					}
				})
			}
		});

	},
	findAllJobs : function(res,shID){
		MongoClient.connect(url,function(err,db){
			if(err){
				console.log(err);
			}
			else{
				var collection = db.collection(shID);
				collection.find().toArray(function(err,data){
					res.send(JSON.stringify(data));
				})
			}
		});
	},
	createEmployee : function(obj){
		MongoClient.connect(url,function(err,db){
			if(err){
				console.log(err);
			}
			else{
				var collection = db.collection('employee');
				collection.insert(obj,function(err,resp){
					if(err){
						console.log(err);
					}
					else{
						console.log('' + resp.insertedCount + ' Employee(s) created');
					}
				});
			}
		});
	}
}