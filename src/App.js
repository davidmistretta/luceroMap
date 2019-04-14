import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount(){
    this.renderMap()
  }
  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCvdgUHoWt0MgqmWmcw-IcMAXMvRLWxcpE&callback=initMap")
    window.initMap = this.initMap
  }
  /* Initialize Map Function */
  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: 10.4806, lng: -66.9036},
        zoom: 8
    });
  }




  render() {
    return (
      <main>
             <div id="map"></div>

      </main>
    );
  }

}

/*
Function to load
   <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
    async defer></script>
into react
*/
function loadScript(url) {
  var scriptIndex = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  scriptIndex.parentNode.insertBefore(script, scriptIndex)
}
/*
  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
    async defer></script>
*/

export default App;
