const express = require('express');
const router = express.Router();

const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID

//Connection
const url = 'mongodb://localhost:27017/'
const mongoClient = new MongoClient(url, { useNewUrlParser: true })
let db
let collection
mongoClient.connect(function (err, client){
  if (err){
      return console.log(err)
  }
  db = client.db('WeatherApp')
  collection = db.collection("Cities")
})

router.get('/', function (req, res) {
  collection.find({}).toArray(function(err, result) {
    if(err){
        console.log(err);
        return res.sendStatus(500);
    }
    let cities = [];
    for (i in result) cities.push(result[i].city);
    return res.send(cities);
  })
})

router.post("/", function (req, res) {
  if(!req.body) return res.sendStatus(400)
  collection.updateOne({ city : req.body.city }, { $set: { city : req.body.city } }, {upsert: true}, (err, task) => {
     if (err) {
       console.log(err);
       return res.sendStatus(500);
     }
     return res.sendStatus(200);
  });
})

router.delete("/", function (req, res) {
  if(!req.body) return res.sendStatus(400)
  collection.deleteOne({ city : req.body.city }, function(err, doc){
    if(err){
        console.log(err);
        return res.sendStatus(500);
    }
    return res.sendStatus(200);
  });
})

module.exports = router;
