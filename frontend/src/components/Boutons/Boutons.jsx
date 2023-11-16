import React from "react";
import { useNavigate } from "react-router-dom";
import "./Boutons.css";

function Boutons() {
  const MyBoutons = () => {};
  return (
    <>
      <div>
        <button type="button" onClick={handleClick}>
          Event aléatoire
        </button>
      </div>
      <div>
        <button type="button" onClick={handleClick}>
          Multisearch
        </button>
      </div>
    </>
  );
}

export default Boutons;
