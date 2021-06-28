import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      zoom:10,
      
      mapCenter: {
          lat:-17.394018381051936, 
          lng: -66.17169537563075
      }
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <Map google={this.props.google} 
            style={{maxWidth: "700px",
            height: "200px",
            overflowX: "hidden",
            overflowY: "hidden"}}            
            initialCenter={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
            }}
            center={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
            }}
            >
          <Marker 
            position={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
            }}
          />
   
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>
      )
    }
  }

  export default GoogleApiWrapper({
    apiKey: ('AIzaSyDT9OaR_RhZ31-tzZa-1wA-Gx76corbh00')
  })(MapContainer)