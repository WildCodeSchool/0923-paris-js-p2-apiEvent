import { createContext, useState, useEffect, useContext, useMemo } from "react";

const allEventsContext = createContext();

export function AllEventsProvider({ children }) {
  const [dataEvents, setDataEvents] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const value = useMemo(() => {
    useEffect(() => {
      fetch(
        "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?select=uid%2C%20title_fr%2C%20longdescription_fr%2C%20conditions_fr%2C%20keywords_fr%2C%20image%2C%20thumbnail%20%2Cfirstdate_begin%20as%20date1%2C%20lastdate_begin%20as%20date2%2C%20timings%2C%20location_coordinates%2C%20location_address%2C%20location_postalcode&where=date1%20%3E%20%272023-11-01%27%20and%20location_city%20in%20(%20%22Paris%22)%20and%20conditions_fr%20is%20not%20null%20and%20longdescription_fr%20is%20not%20null%20and%20image%20is%20not%20null%20and%20thumbnail%20is%20not%20null&order_by=date1%20asc"
      )
        .then((res) => res.json())
        .then((data) => {
          setDataEvents(data.results);
          setFilteredData(data.results);
        });
    }, []);
    return { dataEvents, setDataEvents, filteredData, setFilteredData };
  }, [dataEvents, filteredData]);

  return (
    <allEventsContext.Provider value={value}>
      {children}
    </allEventsContext.Provider>
  );
}

export default () => useContext(allEventsContext);
