const offlineWeather = (params) => {
  const city = params.startsWith('q=') ? params.slice(2) : 'Saint Petersburg';
  const result = (city in weather_data) ? weather_data[city] : weather_data['Other']
  return result
}

const weather_data = {
  "Moscow": {
    "cod": 200,
    "city": "Moscow",
    "temp": 2,
    "pressure": 774,
    "humidity": 100,
    "weather": "Mist",
    "icon": "50n",
    "wind": 3,
    "coords": [
      55.75,
      37.62
    ]
  },
  "Paris": {
    "cod": 200,
    "city": "Paris",
    "temp": 8,
    "pressure": 764,
    "humidity": 54,
    "weather": "Clear sky",
    "icon": "01d",
    "wind": 1.5,
    "coords": [
      48.86,
      2.35
    ]
  },
  "London": {
    "cod": 200,
    "city": "London",
    "temp": 6,
    "pressure": 762,
    "humidity": 75,
    "weather": "Scattered clouds",
    "icon": "03d",
    "wind": 1.5,
    "coords": [
      51.51,
      -0.13
    ]
  },
  "New York": {
    "cod": 200,
    "city": "New York",
    "temp": 7,
    "pressure": 757,
    "humidity": 75,
    "weather": "Light rain",
    "icon": "10d",
    "wind": 3.1,
    "coords": [
      40.73,
      -73.99
    ]
  },
  "Saint Petersburg": {
    "cod": 200,
    "city": "Saint Petersburg",
    "temp": 5,
    "pressure": 771,
    "humidity": 93,
    "weather": "Light intensity drizzle",
    "icon": "09n",
    "wind": 5,
    "coords": [
      59.94,
      30.32
    ]
  },
  "Other": {
    "cod": -1
  }
}

module.exports.offlineWeather = offlineWeather;
