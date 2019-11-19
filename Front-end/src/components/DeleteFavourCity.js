import React from 'react'
import {connect} from 'react-redux'

import {delFavour} from '../scripts/main';

class DeleteFavourCity extends React.Component {
  render(){
    return (
        <input className="img_button" type="image" name="submit" alt="delete" onClick={() => this.props.deleteFavour(this.props.id)} src="img/del.png" />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFavour: (key) => {
      dispatch(delFavour(key));
    }
  }
}

export default connect(null, mapDispatchToProps)(DeleteFavourCity);
