import { useState } from "react";
import "./SearchBar.css";
import { Icon } from "@iconify/react";

function SearchBar({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    onSearch(searchInput);
  };

  return (
    <div className="searchBar-container">
      <form className="searchBar">
        <input
          type="text"
          placeholder="Musée, théâtre..."
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <button type="button" onClick={handleSearch}>
          <Icon icon="charm:search" color="#fafaff" width="40" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
