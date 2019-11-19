import React from 'react'

class WeatherLine extends React.Component {
  render(){
    return (
      <div className="line">
        <div className="param">{this.props.param}</div>
        <div className="value">{this.props.value}</div>
      </div>
    )
  }
}

export default WeatherLine;
