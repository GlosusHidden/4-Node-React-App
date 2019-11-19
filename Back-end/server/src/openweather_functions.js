const fetch = require('node-fetch')

const apiLink = 'https://api.openweathermap.org/data/2.5/weather?'
const apiKey = 'appid=73a2f4a5254e97adabb2160caa6234a8'
const apiOptions = 'units=metric'

const offlineWeather = require("./offline/offline_search").offlineWeather

const apiResultParser = (data) => {
  if (data.cod === 200) {
    return {
      cod: data.cod,
      city: data.name,
      temp: Math.round(parseFloat(data.main.temp)),
      pressure: Math.round(parseInt(data.main.pressure) * 0.75),
      humidity: data.main.humidity,
      weather: data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1),
      icon: data.weather[0].icon,
      wind: data.wind.speed,
      coords: [data.coord.lat, data.coord.lon]
    };
  } else {
    return { cod: data.cod }
  }
}

const openWeatherRequest = async (params) => {
  result = await fetch(apiLink + apiOptions + '&' + apiKey + '&' + params)
    .then(res => {
      if (res.status === 200) {
        return res;
      } else {
        let error = new Error(res.statusText)
        error.response = res
        throw error
      }
    })
    .then(res => {
      if (res.headers['content-type'].startsWith('application/json')) {
        let error = new Error('Incorrect response from server')
        error.response = res
        throw error
      }
      return res
    })
    .then(res => res.json())
    .then(data => {
      return apiResultParser(data) })
    .catch((e) => {
      console.log('Error: ' + e.message);
      return offlineWeather(params);
    });
    return result;
}

module.exports.openWeather = openWeatherRequest;
