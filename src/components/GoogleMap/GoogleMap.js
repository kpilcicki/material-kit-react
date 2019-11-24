import React from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

// nodejs library to set properties for components
import styles from "../../assets/jss/material-kit-react/components/mapStyle.js";

function GoogleMap(props) {
  return (
    <Map
      google={props.google}
      zoom={8}
      style={styles}
      initialCenter={{ lat: 47.444, lng: -122.176 }}
    />
  );
}

export default GoogleApiWrapper({
  apiKey: ''
})(GoogleMap);
