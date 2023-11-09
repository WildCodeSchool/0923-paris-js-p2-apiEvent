import { Icon } from "@iconify/react";
import SearchBar from "../../components/SearchBar/SearchBar";
import useAllEventsContext from "../../contexts/AllEvents";
import Card from "../../components/Card/Card";

function SearchInterface() {
  const { dataEvents } = useAllEventsContext();
  return (
    <>
      <SearchBar />
      <div className="ZoneFilter">
        <h2>
          {" "}
          <Icon
            icon="mi:location"
            color="#003049"
            width="50"
            height="50"
          />{" "}
          Select Zone
        </h2>
        <div className="zone-list">
          {dataEvents.map((obj) => {
            return <Card dataEvents={obj} />;
          })}
        </div>
      </div>
      <div className="DateFilter">
        <h2>
          {" "}
          <Icon icon="uiw:date" color="#003049" width="40" height="40" /> Select
          Date
        </h2>
      </div>
      <div className="ActivityFilter">
        <h2>
          {" "}
          <Icon icon="mi:filter" color="#003049" width="50" height="50" />{" "}
          Select Activity
        </h2>
      </div>
    </>
  );
}

export default SearchInterface;
