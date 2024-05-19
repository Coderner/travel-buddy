import React from "react";
import GoogleMapReact from 'google-map-react';
import { LocationOnOutlined } from "@mui/icons-material";
import {Box, Paper, Typography, Rating, useMediaQuery} from "@mui/material";

export default function Map(){
  const isDesktop = useMediaQuery('(min-width:600px');
  const coordinates = {
    lat: 60,
    lng: 30
  }

  const defaultProps = {
    center: coordinates,
    zoom: 11
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <div
          lat={59.955413}
          lng={30.337844}
        >
            <LocationOnOutlined/>
        </div>
      </GoogleMapReact>
    </div>
  );
}