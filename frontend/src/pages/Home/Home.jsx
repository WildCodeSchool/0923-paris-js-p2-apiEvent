import SearchBar from "../../components/SearchBar/SearchBar";
import "./Home.css";
import useAllEventsContext from "../../contexts/AllEvents";

export default function Home() {
  const { filterData, filteredData, dataEvents } = useAllEventsContext();
  return (
    <>
      <header>
        <h1 className="logo">EVENTURES</h1>
        <div className="header-name-container">
          <h2>Discover Events Near You</h2>
          <div className="searchBar-container">
            <SearchBar filterData={filterData} />
          </div>
        </div>
      </header>
      <div className="cards-display">
        {filteredData.map((data) => {
          return <div key={data.uid}>{dataEvents}</div>;
        })}
      </div>
    </>
  );
}
