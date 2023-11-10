import "./SearchKeyword.css";

function SearchKeyword({ filters, setFilters }) {
  // const handleFilterBtnClick = (clickedValue) => {
  //   setFilters({
  //     ...filters,
  //     activity: clickedValue,
  //   });
  // };
  return (
    <div className="activity-list">
      <button
        type="button"
        className="card-activity-filter"
        onClick={() => setFilters({ ...filters, activity: "concert" })}
      >
        Concert
      </button>
      <button
        type="button"
        className="card-activity-filter"
        onClick={() => setFilters({ ...filters, activity: "danse" })}
      >
        Dance
      </button>
      <button
        type="button"
        className="card-activity-filter"
        onClick={() => setFilters({ ...filters, activity: "exposition" })}
      >
        Exposition
      </button>
      <button
        type="button"
        className="card-activity-filter"
        onClick={() => setFilters({ ...filters, activity: "sport" })}
        // onClick={handleFilterBtnClick("sport")}
      >
        Sport
      </button>
      <button
        type="button"
        className="card-activity-filter"
        onClick={() => setFilters({ ...filters, activity: "nature" })}
        // onClick={handleFilterBtnClick("nature")}
      >
        Nature
      </button>
      <button
        type="button"
        className="card-activity-filter"
        onClick={() => setFilters({ ...filters, activity: "famille" })}
        // onClick={handleFilterBtnClick("famille")}
      >
        Family
      </button>
    </div>
  );
}

export default SearchKeyword;
