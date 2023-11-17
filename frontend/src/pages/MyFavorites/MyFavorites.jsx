import React from "react";
import useAllEventsContext from "../../contexts/AllEvents";
import "./MyFavorites.css";
import Menuburger from "../../components/MenuBurger/MenuBurger";

function MyFavorites() {
  const { favoritesList } = useAllEventsContext();
  console.info(favoritesList);
  return (
    <div>
      <h2 className="fav-title">Your favorites</h2>

      {favoritesList.map((event) => (
        <div key={event.uid}>
          <div className="singleEvent-fav">
            <div className="container-top-fav">
              <img src={event.image} alt="img" className="imageEvent-fav" />
            </div>
            <div className="container-bot-fav">
              <ol className="eventdatelist-fav">
                <li>
                  {" "}
                  {new Date(event.date1).getDate()}{" "}
                  {new Date(event.date1).toLocaleDateString("default", {
                    month: "short",
                  })}
                </li>
                <li className="year">{new Date(event.date1).getFullYear()}</li>
              </ol>
              <h1 className="titleevent-fav">{event.title_fr}</h1>
            </div>
          </div>
        </div>
      ))}
      <Menuburger />
    </div>
  );
}

export default MyFavorites;
