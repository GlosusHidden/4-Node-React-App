const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID

const openWeather = require("./src/openweather_functions").openWeather

const app = express()
app.use(cors())
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 4000

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

  app.listen(port, () => {
      console.log('Server started on port ' + port)
  })
})

app.get('/weather', async (req, res) => {
  const result = await openWeather('q=' + req.query.city);
  res.send(result);
})

app.get('/weather/coordinates', async (req, res) => {
  const result = await openWeather('&lat=' + req.query.lat + '&lon=' + req.query.lon);
  res.send(result);
})

app.get('/favourites', function (req, res) {
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

app.post("/favourites", function (req, res) {
  if(!req.body) return res.sendStatus(400)
  collection.updateOne({ city : req.body.city }, { $set: { city : req.body.city } }, {upsert: true}, (err, task) => {
     if (err) {
       console.log(err);
       return res.sendStatus(500);
     }
     return res.sendStatus(200);
  });
})

app.delete("/favourites", function (req, res) {
  if(!req.body) return res.sendStatus(400)
  collection.deleteOne({ city : req.body.city }, function(err, doc){
    if(err){
        console.log(err);
        return res.sendStatus(500);
    }
    return res.sendStatus(200);
  });
})
