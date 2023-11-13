import { useState } from "react";
import "./SearchZone.css";

function SearchZone({ filters, setFilters }) {
  const [visible, setVisible] = useState(3);

  const filterZoneBtnArray = [...Array(20)]
    .slice(0, visible)
    .map((_, index) => {
      const BtnPostalCodeValue = `${75001 + index}`;
      return (
        <button
          key={BtnPostalCodeValue}
          type="button"
          className="card-zone-filter-btn"
          onClick={() => setFilters({ ...filters, zone: BtnPostalCodeValue })}
        >
          {BtnPostalCodeValue}
        </button>
      );
    });

  const showMoreFilters = () => {
    setVisible((prevVisible) => {
      return visible === 3 ? prevVisible + 17 : 3;
    });
  };

  return (
    <div className="filter-btn-container">
      <div className="zone-list">
        <button
          type="button"
          className="card-zone-filter-btn"
          onClick={() => setFilters({ ...filters, zone: "Paris" })}
        >
          Paris
        </button>
        {filterZoneBtnArray}
      </div>
      <button type="button" className="showMoreBtn" onClick={showMoreFilters}>
        {visible < 21 ? "Show more" : "Show less"}
      </button>
    </div>
  );
}

export default SearchZone;
