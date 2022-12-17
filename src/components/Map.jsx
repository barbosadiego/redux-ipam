import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// este componente recebe os valores de
// latitude e longitude para renderizar
// o mapa na tela
const Map = ({ lat, long }) => {
  return (
    <MapContainer center={[lat, long]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, long]}>
        <Popup>
          Latitude {lat} / Longitude {long}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
