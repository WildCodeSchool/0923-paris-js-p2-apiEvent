import { Icon } from "@iconify/react";
import "./Reservation.css";
import { useState } from "react";

function Reservation({ data }) {
  const [counter, setCounter] = useState(0);
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

  return (
    <>
      <h1 className="titlebooking">Check available places</h1>
      <p className="prix">{data.conditions_fr}</p>
      <article className="datetop">
        <Icon icon="uiw:date" color="#003049" width="20" />
        <button type="button">
          {new Date(data.date1).toLocaleDateString()}
        </button>
        <button type="button">
          {new Date(data.date2).toLocaleDateString()}
        </button>
      </article>
      <div className="counter-adult">
        <h4>adult ticket</h4>
        <div className="adultickets">
          <button className="adultticketdesc" type="button" onClick={decrease}>
            -
          </button>
          <span className="counteradultticket">{counter}</span>
          <button className="adultticketasc" type="button" onClick={increase}>
            +
          </button>
        </div>
      </div>
      <div className="counter-adult">
        <h4>child ticket</h4>
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
      <button className="bookend" type="button">
        book ticket
      </button>
    </>
  );
}
export default Reservation;
