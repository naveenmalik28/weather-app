// src/components/MapComponent.js

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ location, setWeatherData }) => {
  const { lat, lng } = location;

  const UpdateMapCenter = ({ center }) => {
    const map = useMap();
    useEffect(() => {
      map.setView(center, map.getZoom());
    }, [center, map]);
    return null;
  };

  return (
    <MapContainer center={[lat, lng]} zoom={10} className="map-container">
      <UpdateMapCenter center={[lat, lng]} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, lng]}>
        <Popup>
          Weather info will be shown here.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

MapComponent.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  setWeatherData: PropTypes.func.isRequired,
};

export default MapComponent;
