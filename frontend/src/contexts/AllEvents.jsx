import { createContext, useState, useEffect, useContext, useMemo } from "react";

const allEventsContext = createContext();

export function AllEventsProvider({ children }) {
  const [dataEvents, setDataEvents] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const currentDate = new Date();

  useEffect(() => {
    fetch(
      `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?select=uid%2C%20title_fr%2C%20longdescription_fr%2C%20conditions_fr%2C%20keywords_fr%2C%20image%2C%20thumbnail%2C%20firstdate_begin%20as%20date1%2C%20lastdate_end%20as%20date2%2C%20timings%2C%20location_coordinates%2C%20location_address%2C%20location_postalcode&where=location_city%20like%20%27Paris%27%20and%20longdescription_fr%20is%20not%20null%20and%20conditions_fr%20is%20not%20null%20and%20image%20is%20not%20null%20and%20thumbnail%20is%20not%20null%20and%20timings%20is%20not%20null%20and%20location_coordinates%20is%20not%20null%20and%20location_address%20is%20not%20null%20and%20date1%20%3E%3D%20%27${currentDate.getFullYear()}%2F${
        currentDate.getMonth() + 1
      }%2F${currentDate.getDate()}%27%20&order_by=date1%20ASC&limit=100&timezone=Europe%2FParis`
    )
      .then((res) => res.json())
      .then((data) => {
        setDataEvents(data.results);
        setFilteredData(data.results);
      });
  }, []);

  const toggleFavorite = (eventId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(eventId)) {
        return prevFavorites.filter((id) => id !== eventId);
      }
      return [...prevFavorites, eventId];
    });
  };

  const filterFavorites = () => {
    const filtered = dataEvents.filter((event) =>
      favorites.includes(event.uid)
    );
    setFilteredData(filtered);
  };

  const value = useMemo(() => {
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
    return {
      dataEvents,
      setDataEvents,
      filteredData,
      setFilteredData,
      filterData,
      toggleFavorite,
      filterFavorites,
      favorites,
    };
  }, [dataEvents, filteredData, favorites]);

  return (
    <allEventsContext.Provider value={value}>
      {children}
    </allEventsContext.Provider>
  );
}

export default () => useContext(allEventsContext);
