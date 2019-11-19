import React from 'react'

import WeatherBlock from './WeatherBlock'

class FavourWeatherContainer extends React.Component {
  render(){
    const list = this.props.data.map((city, index) => {
      return <WeatherBlock key={index} data={city.data} id={city.key} displayStyle='Favour' removable={true}/>;
    });
    return (
      <div id='favour_weather_container'>
        {list}
      </div>
    )
  }
}

export default FavourWeatherContainer;
