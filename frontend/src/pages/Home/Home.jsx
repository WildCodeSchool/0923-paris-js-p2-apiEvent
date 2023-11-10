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
      `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?limit=20&refine=firstdate_begin%3A%22${currentDate.getFullYear()}/${currentDate.getMonth()}%22&refine=keywords_fr%3A%22${search}%22`
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
