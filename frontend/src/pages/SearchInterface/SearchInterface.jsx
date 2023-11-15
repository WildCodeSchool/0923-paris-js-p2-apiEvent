import { useState } from "react";
import { Icon } from "@iconify/react";
import useAllEventsContext from "../../contexts/AllEvents";
import SearchDate from "../../components/SearchDate/SearchDate";
import SearchZone from "../../components/SearchZone/SearchZone";
import SearchKeyword from "../../components/SearchKeyword/SearchKeyword";

function SearchInterface({ setOpen }) {
  const [error, setError] = useState(null);
  const { setFilteredData } = useAllEventsContext();
  const [filters, setFilters] = useState({
    date: null,
    zone: null,
    activity: null,
  });
  const currentDate = new Date();
  console.info(filters);

  function applyFilters() {
    let url = `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?select=uid%2C%20title_fr%2C%20longdescription_fr%2C%20conditions_fr%2C%20keywords_fr%2C%20image%2C%20thumbnail%2C%20firstdate_begin%20as%20date1%2C%20lastdate_end%20as%20date2%2C%20timings%2C%20location_coordinates%2C%20location_address%2C%20location_postalcode&where=location_city%20like%20%27Paris%27%20and%20longdescription_fr%20is%20not%20null%20and%20conditions_fr%20is%20not%20null%20and%20image%20is%20not%20null%20and%20thumbnail%20is%20not%20null%20and%20timings%20is%20not%20null%20and%20location_coordinates%20is%20not%20null%20and%20location_address%20is%20not%20null%20and%20date1%20%3E%3D%20%27${currentDate.getFullYear()}%2F${
      currentDate.getMonth() + 1
    }%2F${currentDate.getDate()}%27%20&order_by=date1%20ASC&limit=100&timezone=Europe%2FParis`;
    //        "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?select=uid%2C%20title_fr%2C%20longdescription_fr%2C%20conditions_fr%2C%20keywords_fr%2C%20image%2C%20thumbnail%2C%20firstdate_begin%20as%20date1%2C%20lastdate_end%20as%20date2%2C%20timings%2C%20location_coordinates%2C%20location_address%2C%20location_postalcode&where=location_city%20like%20%27Paris%27%20and%20longdescription_fr%20is%20not%20null%20and%20conditions_fr%20is%20not%20null%20and%20image%20is%20not%20null%20and%20thumbnail%20is%20not%20null%20and%20timings%20is%20not%20null%20and%20location_coordinates%20is%20not%20null%20and%20location_address%20is%20not%20null%20and%20date1%20%3E%3D%20%272023%2F11%2F13%27%20&order_by=date1%20ASC&limit=100&timezone=Europe%2FParis";

    //  "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?limit=100";
    if (filters.activity) {
      url += `&refine=keywords_fr%3A%22${filters.activity}%22`;
    }
    if (filters.date) {
      url += `&refine=firstdate_begin%3A%22${filters.date}%22`;
    }
    if (filters.zone !== null && filters.zone.includes("75")) {
      url += `&refine=location_postalcode%3A%22${filters.zone}%22`;
    }

    console.info("URL", url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.results.length > 0) {
          setFilteredData(data.results);
          setError(null);
        } else {
          setFilteredData([]);
          setError("Oops! No events matching your search criterias.Try again");
        }
      });
    setOpen(false);
  }

  const styleDateIcon = {
    padding: "8px",
  };

  return (
    <>
      <div className="zoneFilter">
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
      <div className="dateFilter">
        <h2>
          {" "}
          <Icon
            icon="uiw:date"
            color="#003049"
            width="40"
            height="40"
            style={styleDateIcon}
          />{" "}
          Select Date
        </h2>
        <SearchDate filters={filters} setFilters={setFilters} />
      </div>
      <div className="activityFilter">
        <h2>
          {" "}
          <Icon icon="mi:filter" color="#003049" width="50" height="50" />{" "}
          Select Activity
        </h2>
        <SearchKeyword filters={filters} setFilters={setFilters} />
      </div>
      <div className="error-display">
        {error && <p className="errorMessage">{error}</p>}
      </div>
      <button type="button" className="applyFilterBtn" onClick={applyFilters}>
        APPLY FILTER
      </button>
    </>
  );
}

export default SearchInterface;
