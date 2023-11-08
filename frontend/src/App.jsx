import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Description from "./components/Description/Description";
import Home from "./pages/Home/Home";

function App() {
  const [dataEvents, setDataEvents] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

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
      <BrowserRouter>
        <Router />
        <NavBar />
      </BrowserRouter>

      <Home filterData={filterData} />
      <div className="cards-display">
        {filteredData.map((data) => (
          <div key={data.uid}>
            <Description data={data} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
