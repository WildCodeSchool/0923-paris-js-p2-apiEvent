/* eslint-disable react/no-danger */
import { useState } from "react";
import "./description.css";
import { Icon } from "@iconify/react";
import Reservation from "../Reservation/Reservation";
import Map from "../../components/Map/Map";

function Description({ data }) {
  const [bookingVisible, setBookingVisible] = useState(false);

  return (
    <div className="alldescritpion">
      <img src={data.image} alt={data.title_fr} className="pic" />
      <div className="desccond">
        <h3 className="titledescription">{data.title_fr}</h3>
        <h6 className="conditions">{data.conditions_fr}</h6>
      </div>
      <p
        className="longdescr"
        dangerouslySetInnerHTML={{ __html: data.longdescription_fr }}
      />
      <hr className="hrtop" />
      <div className="dateadress">
        <ul className="descirptiondatelist">
          <Icon icon="uiw:date" color="#003049" width="20" />
          <li>{new Date(data.date1).toLocaleDateString()}</li>
          <li>{new Date(data.date2).toLocaleDateString()}</li>
        </ul>
        <hr className="hrbot" />
        <div className="location">
          <Icon icon="pajamas:location" color="#003049" width="20" />
          <p className="adress">{data.location_address}</p>
        </div>
      </div>
      <Map
        latitude={data.location_coordinates.lat}
        longitude={data.location_coordinates.lon}
      />
      <button
        className="booking"
        type="button"
        onClick={() => setBookingVisible(!bookingVisible)}
      >
        book ticket
      </button>
      {bookingVisible ? <Reservation data={data} /> : null}
    </div>
  );
}

export default Description;
