import * as ReduxActions from '../actions/index'

const backEndPort = 'http://localhost:4000/'

const backEndPortWeather = backEndPort + 'weather/';
const backEndPortFavour = backEndPort + 'favourites';

const refreshGeolocation = () => {
  return (dispatch) => {
    let requestCreator = 'GeolocationWeather'
    dispatch(ReduxActions.requestForGeolocation(requestCreator));
    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationFailure, {enableHighAccuracy: true});

    function geolocationSuccess(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      let requestStr = `coordinates?lat=${latitude}&lon=${longitude}`;
      return dispatch(weatherSearch(requestStr, requestCreator));
    }

    function geolocationFailure(error) {
      let defaultCity = 'Saint Petersburg';
      let requestStr = `?city=${defaultCity}`;
      return dispatch(weatherSearch(requestStr, requestCreator));
    }
  }
}

const weatherSearch = (requestStr, requestCreator) => {
  return (dispatch) => {
    dispatch(ReduxActions.requestWeather(requestCreator));
    let link = backEndPortWeather + requestStr;
    fetch(link)
      .then(res => res.json())
      .then(
        data => dispatch(ReduxActions.requestWeatherSuccess(data, requestCreator)),
        err => dispatch(ReduxActions.requestWeatherError(requestCreator))
      )
  }
}

const getFavour = () => {
  return (dispatch) => {
    fetch(backEndPortFavour)
      .then(res => res.json())
      .then(data => {
        if (data !== null){
          for (let city of data) {
            dispatch(weatherSearch(`?city=${city}`, `${city}`));
          }
        }
      }
    )
  }
}

const addFavour = (city) => {
  return (dispatch) => {
    fetch(backEndPortFavour, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({city : city})
    }).then(res => {
      if (res) dispatch(weatherSearch(`?city=${city}`, `${city}`));
    })
  }
}

const delFavour = (city) => {
  return (dispatch) => {
    fetch(backEndPortFavour, {
      method: 'DELETE',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({city : city})
    }).then(res => {
      if (res) dispatch(ReduxActions.deleteFavour(city))
    })
  }
}

export {refreshGeolocation, weatherSearch, getFavour, addFavour, delFavour};
