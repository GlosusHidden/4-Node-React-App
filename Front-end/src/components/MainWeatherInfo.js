import React from 'react';

import DeleteFavourCity from './DeleteFavourCity'

class MainWeatherInfo extends React.Component {
  render(){
    let styleClass = (this.props.displayStyle === 'Favour') ? 'main_favour_weather_info' : (this.props.displayStyle === 'Geo') ? 'main_geo_weather_info' : '';
    return (
      <div className={styleClass}>
        <div className="city">{this.props.data.city}</div>
        <div className="img"><img className="weather_icon" alt="weather" src={`http://openweathermap.org/img/wn/${this.props.data.icon}@2x.png`} /></div>
        <div className="temp">{this.props.data.temp}°C</div>
        {this.props.displayStyle === 'Favour' && <DeleteFavourCity id={this.props.id} />}
      </div>
    )
  }
}

export default MainWeatherInfo;
