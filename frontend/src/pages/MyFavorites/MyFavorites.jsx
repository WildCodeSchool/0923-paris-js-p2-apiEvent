import React from "react";
import useAllEventsContext from "../../contexts/AllEvents";
import "./MyFavorites.css";
import Menuburger from "../../components/MenuBurger/MenuBurger";

function MyFavorites() {
  const { filteredData } = useAllEventsContext();

  return (
    <div>
      <h2>Favoris</h2>

      {filteredData.map((event) => (
        <div key={event.uid}>
          <div className="container-fav">
            <div className="container-top-fav" />
            <img src={event.image} alt="img" className="image-fav" />
            <div className="container-bot-fav" />
            <ol className="eventdatelist-fav">
              <li>
                {" "}
                {new Date(event.date1).getDate()}{" "}
                {new Date(event.date1).toLocaleDateString("default", {
                  month: "short",
                })}
              </li>
              <li className="year-fav">
                {new Date(event.date1).getFullYear()}
              </li>
            </ol>
            <h3 className="title-fav">{event.title_fr}</h3>
          </div>
        </div>
      ))}
      <Menuburger />
    </div>
  );
}

export default MyFavorites;
