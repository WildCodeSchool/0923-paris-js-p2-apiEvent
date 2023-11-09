/* eslint-disable react/no-danger */
import { useState } from "react";
import "./description.css";
import { Icon } from "@iconify/react";
import Reservation from "../Reservation/Reservation";
import BingMap from "../../components/bingMap/Bingmap";
import useAllEventsContext from "../../contexts/AllEvents";

function Description() {
  const { dataEvents } = useAllEventsContext();
  const [bookingVisible, setBookingVisible] = useState(false);

  return (
    <div className="alldescritpion">
      <img src={dataEvents.image} alt={dataEvents.title_fr} className="pic" />
      <div className="desccond">
        <h3 className="titledescription">{dataEvents.title_fr}</h3>
        <h6 className="conditions">{dataEvents.conditions_fr}</h6>
      </div>
      <p
        className="longdescr"
        dangerouslySetInnerHTML={{ __html: dataEvents.longdescription_fr }}
      />
      <hr className="hrtop" />
      <div className="dateadress">
        <ul className="descirptiondatelist">
          <Icon icon="uiw:date" color="#003049" width="20" />
          <li>{new Date(dataEvents.date1).toLocaleDateString()}</li>
          <li>{new Date(dataEvents.date2).toLocaleDateString()}</li>
        </ul>
        <hr className="hrbot" />
        <div className="location">
          <Icon icon="pajamas:location" color="#003049" width="20" />
          <p className="adress">{dataEvents.location_address}</p>
        </div>
      </div>
      <div className="Map">
        <BingMap data={dataEvents} />
      </div>
      <button
        className="booking"
        type="button"
        onClick={() => setBookingVisible(!bookingVisible)}
      >
        book ticket
      </button>
      {bookingVisible ? <Reservation /> : null}
    </div>
  );
}

export default Description;
