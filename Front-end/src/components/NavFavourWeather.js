import React from 'react'
import {connect} from 'react-redux'

import {addFavour} from '../scripts/main';

class NavFavourWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  clearInput(){
    this.setState({value: ''});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addFavour(this.state.value);
    this.clearInput()
  }

  render(){
    return (
      <div id="nav_favour_weather">
        <div className="text">Favourites</div>
        <form id="add_favour_form" onSubmit={this.handleSubmit}>
          <input className="input_text" name='city_name' type="text" placeholder="Add new city" required value={this.state.value} onChange={this.handleChange} />
          <input className="img_button" type="image" name="submit" alt="add" src="img/add.png" value="Submit"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavour: (city) => {
      dispatch(addFavour(city));
    }
  }
}

export default connect(null, mapDispatchToProps)(NavFavourWeather);
