import React from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// nodejs library to set properties for components
import styles from "../../assets/jss/material-kit-react/components/mapStyle.js";

function GoogleMap(props) {
  return (
    <Map
      google={props.google}
      zoom={13}
      style={styles}
      initialCenter={{ lat: 51.7592, lng: 19.4560 }}
    >
      <Marker position={{ lat: 51.749740, lng: 19.456390}} />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: ''
})(GoogleMap);
