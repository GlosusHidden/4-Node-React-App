import React from 'react'
import WeatherLine from './WeatherLine'

class AdvancedWeatherInfo extends React.Component {
  render(){
    return (
      <div id="advanced_weather_info" className="list">
        <WeatherLine param='Weather' value= {this.props.data.weather} />
        <WeatherLine param='Pressure' value= {this.props.data.pressure + ' mmHg'} />
        <WeatherLine param='Humidity' value={this.props.data.humidity + ' %'}/>
        <WeatherLine param='Wind' value= {this.props.data.wind} />
        <WeatherLine param='Coordinates' value= {'[' + this.props.data.coords[0] + ', ' + this.props.data.coords[1] + ']'} />
      </div>
    )
  }
}

export default AdvancedWeatherInfo;
