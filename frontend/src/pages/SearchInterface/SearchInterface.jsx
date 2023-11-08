import { Icon } from "@iconify/react";
// import { useContext } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import useAllEventsContext from "../../contexts/AllEvents";

function SearchInterface() {
  const { dataEvents, setDataEvents, filteredData, setFilteredData } =
    useAllEventsContext();

  console.info(dataEvents);

  const filterData = (searchQuery) => {
    const filtered = dataEvents.filter((data) => {
      const titleMatch = data.title_fr
        ? data.title_fr.toLowerCase().includes(searchQuery.toLowerCase())
        : false;

      const isPostalCode = /^\d{5}$/.test(searchQuery);

      if (isPostalCode) {
        const userFirstPostalDigits = searchQuery.substring(0, 2);
        const userLastPostalDigits = searchQuery.substring(3, 5);

        const postalCodeMatch = data.location_postalcode
          ? data.location_postalcode.startsWith(userFirstPostalDigits) &&
            data.location_postalcode.endsWith(userLastPostalDigits)
          : false;

        return postalCodeMatch;
      }

      if (typeof data.keywords_fr === "string") {
        const keywordsArray = data.keywords_fr.split(",");
        const keywordsMatch = keywordsArray.some((keyword) =>
          keyword.trim().toLowerCase().includes(searchQuery.toLowerCase())
        );
        return titleMatch || keywordsMatch;
      }

      if (Array.isArray(data.keywords_fr)) {
        const keywordsMatch = data.keywords_fr.some(
          (keyword) =>
            typeof keyword === "string" &&
            keyword.trim().toLowerCase().includes(searchQuery.toLowerCase())
        );

        return titleMatch || keywordsMatch;
      }

      return titleMatch;
    });

    setFilteredData(filtered);
  };

  return (
    <>
      <SearchBar onSearch={filterData} />
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
