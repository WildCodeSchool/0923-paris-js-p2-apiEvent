import React from "react";
import { useNavigate } from "react-router-dom";
import "./Boutons.css";
import useAllEventsContext from "../../contexts/AllEvents";

function Boutons() {
  const navigate = useNavigate();
  const { dataEvents } = useAllEventsContext();
  const randomEvent = () => {
    return dataEvents[Math.floor(Math.random() * dataEvents.length)].uid;
  };

  return (
    <div className="Boutons1">
      <div>
        <button
          className="Event"
          type="button"
          onClick={() => navigate(`/Description/${randomEvent()}`)}
        >
          Event aléatoire
        </button>
      </div>
      <div>
        <button
          className="Multisearch"
          type="button"
          onClick={() => navigate("/")}
        >
          Multisearch
        </button>
      </div>
    </div>
  );
}

export default Boutons;
