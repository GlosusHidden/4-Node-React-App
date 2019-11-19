import React from 'react'

class Loading extends React.Component {
  render(){
    return (
      <div className='placeholder'>
        <div className='text'>Wait, weather loading is in progress..</div>
        <img className='placeholder_img' alt='loading' src='img/loading.gif' />
      </div>
    )
  }
}

export default Loading;
