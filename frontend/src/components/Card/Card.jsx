import React, { useState } from "react";
import "./Card.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import useAllEventsContext from "../../contexts/AllEvents";

function Card({ obj }) {
  const { toggleFavorite, favorites } = useAllEventsContext();
  const [isLiked, setIsLiked] = useState(favorites.includes(obj.uid));
  const handleLiked = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
    toggleFavorite(obj.uid);
  };

  return (
    <Link to={`/Description/${obj.uid}`}>
      <div className="singleEvent">
        <div className="container">
          <img src={obj.image} alt="img" className="imageEvent" />
          <Icon
            icon="ph:heart-fill"
            color={isLiked ? "#E63946" : "#FFFFFF"}
            width="30"
            height="30"
            id="icon-cardList"
            onClick={handleLiked}
          />
        </div>
        <div className="container-bot">
          <ol className="eventdatelist">
            <li>
              {" "}
              {new Date(obj.date1).getDate()}{" "}
              {new Date(obj.date1).toLocaleDateString("default", {
                month: "short",
              })}
            </li>
            <li className="year">{new Date(obj.date1).getFullYear()}</li>
          </ol>
          <h1 className="titleevent">{obj.title_fr}</h1>
        </div>
      </div>
    </Link>
  );
}
export default Card;
