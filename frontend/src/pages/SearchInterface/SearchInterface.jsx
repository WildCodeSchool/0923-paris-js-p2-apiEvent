import { useState } from "react";
import { Icon } from "@iconify/react";
import SearchBar from "../../components/SearchBar/SearchBar";
import useAllEventsContext from "../../contexts/AllEvents";
import SearchDate from "../../components/SearchDate/SearchDate";
import SearchZone from "../../components/SearchZone/SearchZone";
import SearchKeyword from "../../components/SearchKeyword/SearchKeyword";

function SearchInterface() {
  const [error, setError] = useState(null);
  const { setFilteredData } = useAllEventsContext();
  const [filters, setFilters] = useState({
    date: null,
    zone: null,
    activity: null,
  });
  console.info(filters);

  function applyFilters() {
    let url =
      "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?limit=20";
    // public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?limit=20&refine=firstdate_begin%3A%22${filters.date}%22&refine=keywords_fr%3A%22${filters.activity}%22&refine=location_postalcode%3A%22${filters.zone}%22
    if (filters.activity) {
      url += `&refine=keywords_fr%3A%22${filters.activity}%22`;
    }
    if (filters.date) {
      url += `&refine=firstdate_begin%3A%22${filters.date}%22`;
    }
    if (filters.code) {
      url += `&refine=location_postalcode%3A%22${filters.zone}%22`;
    }
    console.info("URL", url);
    // filters dataEvents here using filters state
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.results.length > 0) {
          setFilteredData(data.results);
          setError(null);
        } else {
          setFilteredData([]);
          setError(
            "Oops! Looks like there are no events matching your search criteria.Try again"
          );
        }
      });
  }

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
        <SearchZone filters={filters} setFilters={setFilters} />
      </div>
      <div className="DateFilter">
        <h2>
          {" "}
          <Icon icon="uiw:date" color="#003049" width="40" height="40" /> Select
          Date
        </h2>
        <SearchDate filters={filters} setFilters={setFilters} />
      </div>
      <div className="ActivityFilter">
        <h2>
          {" "}
          <Icon icon="mi:filter" color="#003049" width="50" height="50" />{" "}
          Select Activity
        </h2>
        <SearchKeyword filters={filters} setFilters={setFilters} />
      </div>
      <button type="button" className="ApplyFilterBtn" onClick={applyFilters}>
        APPLY FILTER
      </button>
      <div className="error-display">
        {error && <p className="ErrorMessage">{error}</p>}
      </div>
    </>
  );
}

export default SearchInterface;
