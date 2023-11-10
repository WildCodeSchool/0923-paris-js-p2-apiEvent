import useAllEventsContext from "../../contexts/AllEvents";
import "./SearchZone.css";

function SearchZone() {
  const { dataEvents } = useAllEventsContext();

  return (
    <div className="zone-list">
      {dataEvents.map((obj) => {
        return (
          <div key={obj.uid}>
            <button type="button" className="card-zone-filter">
              {obj.location_postalcode}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default SearchZone;
