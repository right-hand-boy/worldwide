import { useNavigate, useSearchParams } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  // useMap,
  // useMapEvents,
} from "react-leaflet";

import styles from "./Map.module.css";
import { useState } from "react";

function Map() {
  const navigate = useNavigate();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lan");
  console.log(lat, lng, setMapPosition, setSearchParams);
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br />
            Easily customizable
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

// function ChangeCenter({ position }) {
//   const map = useMap();
//   map.setView(position);
//   return null;
// }

// function DetectClick() {
//   const navigate = useNavigate();
//   useMapEvents({
//     click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
//   });
// }

export default Map;
