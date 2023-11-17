/* eslint-disable react/no-danger */
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./description.css";
import { Icon } from "@iconify/react";
import Reservation from "../Reservation/Reservation";
import useAllEventsContext from "../../contexts/AllEvents";
import Menuburger from "../../components/MenuBurger/MenuBurger";

function Description() {
  const { dataEvents } = useAllEventsContext();
  const [bookingVisible, setBookingVisible] = useState(false);
  const { id } = useParams();
  const finDevent = dataEvents.find((event) => event.uid === id);

  function areDatesEqual(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return (
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear()
    );
  }

  function formatDate(date) {
    return new Date(date).toLocaleDateString();
  }
  return (
    <div className="alldescription">
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
          <Icon icon="uiw:date" color="#003049" width="40" />
          {areDatesEqual(finDevent.date1, finDevent.date2) ? (
            <li>{formatDate(finDevent.date1)}</li>
          ) : (
            <>
              <li>{formatDate(finDevent.date1)}</li>
              <li>{formatDate(finDevent.date2)}</li>
            </>
          )}
          {/* <li>{new Date(finDevent.date1).toLocaleDateString()}</li>
          <li>{new Date(finDevent.date2).toLocaleDateString()}</li> */}
        </ul>
        <hr className="hrbot" />
        <div className="location">
          <Icon icon="pajamas:location" color="#003049" width="40" />
          <p className="adress">{finDevent.location_address}</p>
        </div>
      </div>
      <Link to={`/Reservation/${finDevent.uid}`}>
        <button
          className="booking"
          type="button"
          onClick={() => setBookingVisible(!bookingVisible)}
        >
          BOOK TICKET
        </button>
      </Link>
      {bookingVisible ? <Reservation /> : null}
      <Menuburger />
    </div>
  );
}

export default Description;
