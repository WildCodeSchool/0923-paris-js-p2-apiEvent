import { Icon } from "@iconify/react";
import "./Reservation.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import BasicModal from "../../components/Confirmation/Confirmation";
import useAllEventsContext from "../../contexts/AllEvents";
import Menuburger from "../../components/MenuBurger/MenuBurger";

function Reservation() {
  const { dataEvents } = useAllEventsContext();
  const [counter, setCounter] = useState(0);
  const { id } = useParams();
  const finDevent = dataEvents.find((event) => event.uid === id);
  const [openModal, setOpenModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);

  const handleDateButtonClick = (date) => {
    setSelectedDate(date);
  };

  const increase = () => {
    setCounter((count) => count + 1);
  };
  const decrease = () => {
    setCounter((count) => count - 1);
  };

  const [counterChild, setCounterChild] = useState(0);
  const increaseChild = () => {
    setCounterChild((count) => count + 1);
  };
  const decreaseChild = () => {
    setCounterChild((count) => count - 1);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const formatCustomDate = (date) => {
    const options = {
      weekday: "short",
      day: "numeric",
      month: "short",
    };

    const formattedDate = new Date(date).toLocaleDateString("en-US", options);
    const [weekday, day, month] = formattedDate.split(" ");

    return `${weekday} ${day} ${month}.`;
  };

  const date1 = new Date(finDevent.date1).toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  const date2 = new Date(finDevent.date2).toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  return (
    <div className="bloc-res">
      <h1 className="titlebooking">Check available places</h1>
      <p className="prix">{finDevent.conditions_fr}</p>
      <div className="bloc-res2">
        <article className="datetop">
          <div className="dateIcon-container">
            <Icon icon="uiw:date" color="#fafaff" width="45" />
          </div>
          <div className="date-containter">
            {date1 === date2 ? (
              <button
                className={`datebutton ${
                  date1 === selectedDate ? "selected" : ""
                }`}
                type="button"
                onClick={() => handleDateButtonClick(date1)}
              >
                {formatCustomDate(date1)}
              </button>
            ) : (
              <>
                <button
                  className={`datebutton ${
                    date1 === selectedDate ? "selected" : ""
                  }`}
                  type="button"
                  onClick={() => handleDateButtonClick(date1)}
                >
                  {formatCustomDate(date1)}
                </button>
                <button
                  className={`datebutton ${
                    date2 === selectedDate ? "selected" : ""
                  }`}
                  type="button"
                  onClick={() => handleDateButtonClick(date2)}
                >
                  {formatCustomDate(date2)}
                </button>
              </>
            )}
          </div>
        </article>
        <div className="hours-container">
          {/* <h3>Choose the time</h3> */}
          <ol className="hours-list">
            <button
              className={`hour-button ${
                selectedHour === "09h00" ? "selected" : ""
              }`}
              type="button"
              onClick={() => setSelectedHour("09h00")}
            >
              09h00
            </button>
            <button
              className={`hour-button ${
                selectedHour === "11h00" ? "selected" : ""
              }`}
              type="button"
              onClick={() => setSelectedHour("11h00")}
            >
              11h00
            </button>
            <button
              className={`hour-button ${
                selectedHour === "13h00" ? "selected" : ""
              }`}
              type="button"
              onClick={() => setSelectedHour("13h00")}
            >
              13h00
            </button>
            <button
              className={`hour-button ${
                selectedHour === "15h00" ? "selected" : ""
              }`}
              type="button"
              onClick={() => setSelectedHour("15h00")}
            >
              15h00
            </button>
            <button
              className={`hour-button ${
                selectedHour === "17h00" ? "selected" : ""
              }`}
              type="button"
              onClick={() => setSelectedHour("17h00")}
            >
              17h00
            </button>
            <button
              className={`hour-button ${
                selectedHour === "19h00" ? "selected" : ""
              }`}
              type="button"
              onClick={() => setSelectedHour("19h00")}
            >
              19h00
            </button>
          </ol>
        </div>
        <div className="counter-adult">
          <h4>Adult ticket</h4>
          <div className="adultickets">
            <button
              className="adultticketdesc"
              type="button"
              onClick={decrease}
            >
              -
            </button>
            <span className="counteradultticket">{counter}</span>
            <button className="adultticketasc" type="button" onClick={increase}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className="counter-child">
        <h4>Toddler ticket</h4>
        <div className="adultickets">
          <button
            className="adultticketdesc"
            type="button"
            onClick={decreaseChild}
          >
            -
          </button>
          <span className="counteradultticket">{counterChild}</span>
          <button
            className="adultticketasc"
            type="button"
            onClick={increaseChild}
          >
            +
          </button>
        </div>
      </div>
      <button className="bookend" type="button" onClick={handleOpenModal}>
        BOOK TICKET
      </button>
      <Menuburger />
      <BasicModal open={openModal} handleClose={handleCloseModal} />
    </div>
  );
}
export default Reservation;
