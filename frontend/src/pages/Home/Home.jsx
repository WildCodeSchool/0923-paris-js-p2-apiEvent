import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Home.css";
import useAllEventsContext from "../../contexts/AllEvents";
import Card from "../../components/Card/Card";

export default function Home() {
  const { filterData, filteredData, setFilteredData } = useAllEventsContext();
  const [search, setSearch] = useState("");
  const currentDate = new Date();

  useEffect(() => {
    fetch(
      `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?select=uid%2C%20title_fr%2C%20longdescription_fr%2C%20conditions_fr%2C%20keywords_fr%2C%20image%2C%20thumbnail%2C%20firstdate_begin%20as%20date1%2C%20lastdate_end%20as%20date2%2C%20timings%2C%20location_coordinates%2C%20location_address%2C%20location_postalcode&where=location_city%20like%20%27Paris%27%20and%20longdescription_fr%20is%20not%20null%20and%20conditions_fr%20is%20not%20null%20and%20image%20is%20not%20null%20and%20thumbnail%20is%20not%20null%20and%20timings%20is%20not%20null%20and%20location_coordinates%20is%20not%20null%20and%20location_address%20is%20not%20null%20and%20date1%20%3E%3D%20%27${currentDate.getFullYear()}%2F${currentDate.getMonth()}%2F${currentDate.getDate()}%27%20&order_by=date1%20ASC&limit=100&timezone=Europe%2FParis`
      // `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?limit=20&refine=firstdate_begin%3A%22${currentDate.getFullYear()}/${currentDate.getMonth()}%22&refine=keywords_fr%3A%22${search}%22`
    )
      .then((res) => res.json())
      .then((data) => setFilteredData(data.results));
  }, [search]);

  return (
    <>
      <header>
        <h1 className="logo">EVENTURES</h1>
        <div className="header-name-container">
          <h2>Discover Events Near You</h2>
          <div className="searchBar-container">
            <SearchBar
              search={search}
              setSearch={setSearch}
              filterData={filterData}
            />
          </div>
        </div>
      </header>
      <div className="cards-display">
        {filteredData.map((obj) => {
          return <Card obj={obj} />;
        })}
      </div>
    </>
  );
}
