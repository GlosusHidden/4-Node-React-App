import React from 'react'

import DeleteFavourCity from './DeleteFavourCity'

class Error extends React.Component {
  render(){
    return (
      <div className='placeholder'>
        <div className='text'>Error, try again later..</div>
        <img className='placeholder_img' alt='loading' src='img/error.gif' />
        { this.props.removable &&
          <DeleteFavourCity id={this.props.id} />
        }
      </div>
    )
  }
}

export default Error;
