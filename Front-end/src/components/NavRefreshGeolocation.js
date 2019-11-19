import React from 'react'

class NavRefreshGeolocation extends React.Component {
  render(){
    return (
      <div id="nav_refresh_geolocation">
        <div className="text">Weather here</div>
        <button className="button" id="refresh_geolocation" onClick={() => this.props.geoRefreshFunc()}>Refresh Geolocation</button>
      </div>
    )
  }
}

export default NavRefreshGeolocation;
