/********************************************************************
Connect to MongoDB
Create Mongoose Schema and Model
Export Model to make available outisde this script

Ref.
http://mongoosejs.com/docs/guide.html
*********************************************************************/

/********************************************************************
Modules Required
*********************************************************************/
var mongoose = require('mongoose');
var database = require('../config/database'); 	//database config - i.e. Local/remote MongoDB URL
var dbUrl = database.url;						//MongoDB URL

console.log('Running mongoose version %s', mongoose.version);

/********************************************************************
Run MongoDB in safe mode - wait for INSERT operations to succeed
important when altering passwords.
*********************************************************************/
var mongoOptions = { db: { safe: true }};

/********************************************************************
Connect to MongoDB
*********************************************************************/
mongoose.connect(dbUrl, mongoOptions, function (err, res) {
  if (err) { 
    console.log ('ERROR connecting to: ' + dbUrl + '. ' + err);
  } else {
    console.log ('Successfully connected to: ' + dbUrl);
  }
});


//===============================================================================
//Create Mongoose Schema
var Schema = mongoose.Schema;


/**
 * CREATE A MONGOOSE SCHEMA 
 * Ref. http://mongoosejs.com/docs/schematypes.html
 * MongoDb automatically create a parameter _id that can be used to uniquely
 * identify each document in the DB
 */
var todoSchema = new Schema({
	text : String,
	done : Boolean
});

//To add additional keys later, use the Schema#add method

/**
 * CREATE A MONGOOSE MODEL - mongoose.model(modelName, schema)
 * make Model available to us outside this script.
 */
module.exports = mongoose.model('Todo', todoSchema );

/**
 * Open Mongoose Connection to DB
 */
var db = mongoose.connection;
db.on('error', console.error);
