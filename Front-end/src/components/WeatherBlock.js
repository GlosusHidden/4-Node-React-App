import React from 'react'


import MainWeatherInfo from './MainWeatherInfo'
import AdvancedWeatherInfo from './AdvancedWeatherInfo'
import Loading from './Loading'
import Error from './Error'

class FavourWeatherBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (JSON.stringify(nextProps.data) !== '{}') {
      if (nextProps.data.cod === 200) {
        return {loading: false, error: false}
      }
      return {loading: false, error: true}
    }
    return {loading: true, error: false}
  }

  render(){
    let styleClass = (this.props.displayStyle === 'Favour') ? 'favour_block' : (this.props.displayStyle === 'Geo') ? 'geolocation_weather' : '';
    return (
      <div className={styleClass}>
      {
        this.state.loading ? <Loading /> :
          this.state.error ? <Error removable={this.props.removable} id={this.props.id}/> :
            <>
              <MainWeatherInfo data={this.props.data} id={this.props.id} displayStyle={this.props.displayStyle}/>
              <AdvancedWeatherInfo data = {this.props.data}/>
            </>
      }
      </div>
    )
  }
}

export default FavourWeatherBlock;
