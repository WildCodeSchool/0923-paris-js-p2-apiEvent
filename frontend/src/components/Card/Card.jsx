import "./Card.css";
import { Icon } from "@iconify/react";
// import useAllEventsContext from "../../contexts/AllEvents";

function Card({ obj }) {
  //   const { filteredData } = useAllEventsContext();
  return (
    <div className="singleEvent">
      <img src={obj.image} alt="img" />
      <h1 className="titleevent">{obj.title_fr}</h1>
      <ol className="eventdatelist">
        <li>{obj.date1}</li>
      </ol>
      <Icon icon="ph:heart-fill" color="#E63946" width="15" height="15" />
      <h2 className="conditions">{obj.conditions_fr}</h2>
    </div>
  );
}
export default Card;
