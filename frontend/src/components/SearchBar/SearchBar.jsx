import "./SearchBar.css";

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
    <form className="searchBox">
      <input
        type="text"
        placeholder="Musée, théâtre"
        onChange={(event) => handleSearch(event)}
        value={searchInput}
      />
    </form>
  );
}

export default SearchBar;
