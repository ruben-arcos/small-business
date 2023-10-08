import React from "react";
import { useLocation } from "react-router-dom";
export default function DetailsContainer(props) {
  const location = useLocation();

  const taqueria = props.taquerias.find(
    (t) => t.id === Number(location.state.id)
  );

  console.log(taqueria);
  return (
    <div className="detailsContainer">
      <div className="detailsInfoContainer">
        <h2>{taqueria.name}</h2>
        <h3>{taqueria.address}</h3>
        <h3>{taqueria.hours}</h3>
        <p className="descriptionText">{taqueria.description}</p>
      </div>

      <div className="mapContainer">
        <iframe
          title="map"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}
    &q=${taqueria.name}+${taqueria.address}`}
        ></iframe>
      </div>
    </div>
  );
}
