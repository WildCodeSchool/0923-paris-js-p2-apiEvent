import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="searchBar-container">
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
    </div>
  );
}

export default App;
