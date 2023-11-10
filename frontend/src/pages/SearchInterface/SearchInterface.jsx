import { useState } from "react";
import { Icon } from "@iconify/react";
import SearchBar from "../../components/SearchBar/SearchBar";
import useAllEventsContext from "../../contexts/AllEvents";
// import Card from "../../components/Card/Card";
import SearchDate from "../../components/SearchDate/SearchDate";
import SearchZone from "../../components/SearchZone/SearchZone";

function SearchInterface() {
  const { dataEvents, setFilteredData } = useAllEventsContext();
  const [filters, setFilters] = useState({
    date: null,
    zone: null,
    activity: null,
  });

  function applyFilters() {
    const urlParams = {
      code: `&refine=location_postalcode%3A%22${filters.zone}%22`,
      activity: `&refine=keywords_fr%3A%22${filters.activity}%22`,
      date: `&refine=firstdate_begin%3A%22${filters.date.getFullYear()}%22`,
    };
    let url =
      "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?limit=20";
    if (filters.date) {
      url += urlParams.date;
    }
    // filters dataEvents here using filters state
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFilteredData(data.results));
  }
  console.info(dataEvents);
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
        <SearchZone />
        {/* <div className="zone-list">
          {dataEvents.map((obj) => {
            return (
              <div key={obj.uid}>
                <div className="card-zone-filter">
                  {obj.location_postalcode}
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
      <div className="DateFilter">
        <h2>
          {" "}
          <Icon icon="uiw:date" color="#003049" width="40" height="40" /> Select
          Date
        </h2>
        <SearchDate filters={filters} setFilters={setFilters} />
        {/* <div className="date-list">
          {dataEvents.map((obj) => {
            return (
              <div key={obj.uid}>
                <div className="card-date-filter">{obj.date1}</div>
              </div>
            );
          })}
        </div> */}
      </div>
      <div className="ActivityFilter">
        <h2>
          {" "}
          <Icon icon="mi:filter" color="#003049" width="50" height="50" />{" "}
          Select Activity
        </h2>
        {/* <div className="activity-list">
          {dataEvents.map((obj) => {
            return (
              <div key={obj.uid}>
                <div className="card-activity-filter">{obj.keywords_fr}</div>
              </div>
            );
          })}
        </div> */}
      </div>
      <button type="button" className="ApplyFilterBtn" onClick={applyFilters}>
        APPLY FILTER
      </button>
    </>
  );
}

export default SearchInterface;
