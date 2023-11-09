import "./Card.css";
import { Icon } from "@iconify/react";
// import useAllEventsContext from "../../contexts/AllEvents";

function Card({ filteredData }) {
  //   const { filteredData } = useAllEventsContext();
  console.info(filteredData);
  return (
    <div className="singleEvent">
      <img src={filteredData.image} alt="img" />
      <h1 className="titleevent">{filteredData.title_fr}</h1>
      <ol className="eventdatelist">
        <li>{filteredData.date1}</li>
      </ol>
      <Icon icon="ph:heart-fill" color="#E63946" width="15" height="15" />
      <h2 className="conditions">{filteredData.conditions_fr}</h2>
    </div>
  );
}
export default Card;
