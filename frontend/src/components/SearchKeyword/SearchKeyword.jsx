import { useState } from "react";
import "./SearchKeyword.css";

function SearchKeyword({ filters, setFilters }) {
  const [visible, setVisible] = useState(4);

  const sampleSearchCriteria = [
    {
      displayName: "Concert",
      searchFilterName: "concert",
    },
    {
      displayName: "Dance",
      searchFilterName: "danse",
    },
    {
      displayName: "Exposition",
      searchFilterName: "exposition",
    },
    {
      displayName: "Sport",
      searchFilterName: "sport",
    },
    {
      displayName: "Nature",
      searchFilterName: "nature",
    },
    {
      displayName: "Family",
      searchFilterName: "famille",
    },
  ];

  const showMoreFilters = () => {
    setVisible((prevVisible) => (prevVisible === 4 ? prevVisible + 2 : 4));
  };

  return (
    <div className="filter-btn-container">
      {sampleSearchCriteria.slice(0, visible).map((activity) => {
        return (
          <div className="activity-list">
            <button
              key={activity.searchFilterName}
              type="button"
              className="card-activity-filter-btn"
              onClick={() =>
                setFilters({ ...filters, activity: activity.searchFilterName })
              }
            >
              {activity.displayName}
            </button>
          </div>
        );
      })}
      <button type="button" className="showMoreBtn" onClick={showMoreFilters}>
        {visible === 4 ? "Show more" : "Show less"}
      </button>
    </div>
  );
}

export default SearchKeyword;
