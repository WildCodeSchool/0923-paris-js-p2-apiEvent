import "./Card.css";
import { Icon } from "@iconify/react";
// import useAllEventsContext from "../../contexts/AllEvents";

function Card({ obj }) {
  //   const { filteredData } = useAllEventsContext();
  return (
    <div className="singleEvent">
      <div className="container">
        <img src={obj.image} alt="img" className="imageEvent" />
        <Icon icon="ph:heart-fill" color="#E63946" width="15" height="15" />
      </div>
      <h1 className="titleevent">{obj.title_fr}</h1>
      <ol className="eventdatelist">
        <li>{new Date(obj.date1).toLocaleDateString()}</li>
      </ol>
      <h2 className="conditions">{obj.conditions_fr}</h2>
    </div>
  );
}
export default Card;
