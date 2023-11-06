import SearchBar from "../components/SearchBar/SearchBar";
import "./Home.css";

export default function Home({ searchInput, filterData }) {
  return (
    <header>
      <h1 className="logo">EVENTURES</h1>
      <div className="header-name-container">
        <h2>Discover Events Near You</h2>
        <div className="searchBar-container">
          <SearchBar onSearch={filterData} searchInput={searchInput} />
        </div>
      </div>
    </header>
  );
}
