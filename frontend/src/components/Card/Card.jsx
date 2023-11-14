import "./Card.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
// import useAllEventsContext from "../../contexts/AllEvents";

function Card({ obj }) {
  //   const { filteredData } = useAllEventsContext();
  return (
    <Link to={`/Description/${obj.uid}`}>
      <div className="singleEvent">
        <div className="container">
          <img src={obj.image} alt="img" className="imageEvent" />
          <Icon
            icon="ph:heart-fill"
            color="#E63946"
            width="15"
            height="15"
            id="icon-cardList"
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
