export default function (state=null, action) {
  switch (action.type) {
    case 'REQUESTED_FOR_GEOLOCATION':
      return {...state, [action.requestCreator] : {}};
    case 'REQUESTED_WEATHER':
      return {...state, [action.requestCreator] : {}};
    case 'REQUESTED_WEATHER_SUCCEEDED':
      return {...state, [action.requestCreator] : action.payload}
    case 'REQUESTED_WEATHER_FAILED':
      return {...state, [action.requestCreator] : {cod : -1}}
    case 'DELETE_FAVOUR':
      let newState = {}
      for (let city in state) {
        if (city !== action.key) newState[city] = state[city];
      }
      return newState
    default:
      return state
  }
}
