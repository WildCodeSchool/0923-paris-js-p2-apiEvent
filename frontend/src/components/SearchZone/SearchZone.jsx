import "./SearchZone.css";

function SearchZone({ filters, setFilters }) {
  const handleFilterBtnClick = (clickedValue) => {
    setFilters({
      ...filters,
      zone: clickedValue,
    });
  };

  const filterZoneBtnArray = [...Array(21)].map((_, index) => {
    const BtnPostalCodeValue = `${75001 + index}`;
    return (
      <button
        key={BtnPostalCodeValue}
        type="button"
        className="card-zone-filter-btn"
        onClick={() => handleFilterBtnClick(BtnPostalCodeValue)}
      >
        {BtnPostalCodeValue}
      </button>
    );
  });

  return (
    <div className="zone-list">
      <button
        type="button"
        className="card-zone-filter-btn"
        onClick={() => handleFilterBtnClick("75000")}
      >
        Paris
      </button>
      {filterZoneBtnArray}
    </div>
  );
}

export default SearchZone;
