const express = require('express');
const router = express.Router();

const openWeather = require("../src/openweather_functions").openWeather

router.get('/', async (req, res) => {
  const result = await openWeather('q=' + req.query.city);
  res.send(result);
})

router.get('/coordinates', async (req, res) => {
  const result = await openWeather('&lat=' + req.query.lat + '&lon=' + req.query.lon);
  res.send(result);
})

module.exports = router;
