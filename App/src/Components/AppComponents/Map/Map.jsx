import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { Icon } from "leaflet";

const MarkIcon = new Icon({
  iconUrl: "/public/gis_poi-alt.svg",
  iconSize: [35, 35], // size of the icon
  iconAnchor: [15, 30], // point of the icon which will correspond to marker's location
  popupAnchor: [2, -30], // point from which the popup should open relative to the iconAnchor
});

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../../../Contexts/CitiesContext";
import { useUrlPosition } from "../../../hooks/useUrlPosition";

function Map() {
  const { cities } = useCities();

  const [lng, lat] = useUrlPosition();

  const [mapPosition, setMapPosition] = useState([40, 0]);

  useEffect(() => {
    if (lng !== null && lat !== null) {
      console.log(lng, lat);
      setMapPosition([lat, lng]);
    }
  }, [lat, lng]);

  return (
    <MapContainer center={mapPosition} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />
      {cities.map((el) => (
        <Marker position={el.position} key={el.id} icon={MarkIcon}>
          <Popup>
            <span style={{ color: "black" }}>
              {el.notes === "" ? "no comments" : el.notes}
            </span>
          </Popup>
        </Marker>
      ))}
      <ChangeCenter position={mapPosition}></ChangeCenter>
      <DetectClick />
    </MapContainer>
  );
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => navigate(`/app/form?lng=${e.latlng.lng}&lat=${e.latlng.lat}`),
  });
}

ChangeCenter.propTypes = {
  position: PropTypes.array,
};

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default Map;
