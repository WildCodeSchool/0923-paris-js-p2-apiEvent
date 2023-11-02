import "./SearchBar.css";
import { Icon } from "@iconify/react";

function SearchBar(props) {
  const { searchInput, setSearchInput, setCardlist, cardlist } = props;

  function handleSearch(e) {
    setSearchInput(e.target.value);
    e.preventDefault();
    if (searchInput !== "") {
      const filteredList = cardlist.filter((card) =>
        card.username.includes(searchInput)
      );
      setCardlist(filteredList);
    }
  }

  return (
    <div className="searchBar-container">
      <form className="searchBar">
        <input
          type="text"
          placeholder="Musée, théâtre..."
          onChange={(event) => handleSearch(event)}
          value={searchInput}
        />
        <button type="submit">
          <Icon icon="charm:search" color="#fafaff" width="40" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
