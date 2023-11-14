import { useState } from "react";
import "./SearchBar.css";
import { Icon } from "@iconify/react";
import useAllEventsContext from "../../contexts/AllEvents";

// function SearchBar({ search, setSearch }) {
function SearchBar() {
  const { filterData } = useAllEventsContext();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    filterData(search);
    // setSearch(search);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      handleSearch();
      e.preventDefault();
    }
  };

  return (
    <div className="searchBar-container">
      <form className="searchBar">
        <input
          type="text"
          placeholder="Musée, théâtre..."
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleEnterKey}
          value={search}
        />
        <Icon
          icon="charm:search"
          color="#fafaff"
          width="40"
          onClick={handleSearch}
        />
      </form>
    </div>
  );
}

export default SearchBar;
