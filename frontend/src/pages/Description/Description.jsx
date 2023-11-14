/* eslint-disable react/no-danger */
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./description.css";
import { Icon } from "@iconify/react";
import Reservation from "../Reservation/Reservation";
import useAllEventsContext from "../../contexts/AllEvents";

function Description() {
  const { dataEvents } = useAllEventsContext();
  const [bookingVisible, setBookingVisible] = useState(false);
  const { id } = useParams();
  const finDevent = dataEvents.find((event) => event.uid === id);

  return (
    <div className="alldescritpion">
      <img src={finDevent.image} alt={finDevent.title_fr} className="pic" />
      <div className="desccond">
        <h3 className="titledescription">{finDevent.title_fr}</h3>
        <h6 className="conditions">{finDevent.conditions_fr}</h6>
      </div>
      <p
        className="longdescr"
        dangerouslySetInnerHTML={{ __html: finDevent.longdescription_fr }}
      />
      <hr className="hrtop" />
      <div className="dateadress">
        <ul className="descirptiondatelist">
          <Icon icon="uiw:date" color="#003049" width="20" />
          <li>{new Date(finDevent.date1).toLocaleDateString()}</li>
          <li>{new Date(finDevent.date2).toLocaleDateString()}</li>
        </ul>
        <hr className="hrbot" />
        <div className="location">
          <Icon icon="pajamas:location" color="#003049" width="20" />
          <p className="adress">{finDevent.location_address}</p>
        </div>
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
