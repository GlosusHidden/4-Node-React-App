export const requestForGeolocation = (owner) => {
  return { type: 'REQUESTED_FOR_GEOLOCATION', requestCreator: owner  }
};

export const requestWeather = (owner) => {
  return { type: 'REQUESTED_WEATHER', requestCreator: owner }
};

export const requestWeatherSuccess = (data, owner) => {
  return { type: 'REQUESTED_WEATHER_SUCCEEDED', requestCreator: owner, payload: data }
};

export const requestWeatherError = (owner) => {
  return { type: 'REQUESTED_WEATHER_FAILED', requestCreator: owner  }
};

export const deleteFavour = (key) => {
  return { type: 'DELETE_FAVOUR', key: key }
};
