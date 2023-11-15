import { useState } from "react";
import "./SearchZone.css";

function SearchZone({ filters, setFilters }) {
  const [visible, setVisible] = useState(3);
  const [selectedBtn, setSelectedBtn] = useState(null);

  const filterZoneBtnArray = [...Array(20)]
    .slice(0, visible)
    .map((_, index) => {
      const BtnPostalCodeValue = `${75001 + index}`;
      const isSelected = selectedBtn === BtnPostalCodeValue;

      return (
        <button
          key={BtnPostalCodeValue}
          type="button"
          className={`card-zone-filter-btn ${isSelected ? "selected" : ""}`}
          onClick={() => {
            setFilters({ ...filters, zone: BtnPostalCodeValue });
            setSelectedBtn(BtnPostalCodeValue);
          }}
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
          className={`card-zone-filter-btn ${
            selectedBtn === "Paris" ? "selected" : ""
          }`}
          onClick={() => {
            setFilters({ ...filters, zone: "Paris" });
            setSelectedBtn("Paris");
          }}
        >
          Paris
        </button>
        {filterZoneBtnArray}
      </div>
      {/* <div className="showMoreBtn-container"> */}
      <button type="button" className="showMoreBtn" onClick={showMoreFilters}>
        {visible < 20 ? "Show more" : "Show less"}
      </button>
      {/* </div> */}
    </div>
  );
}

export default SearchZone;
