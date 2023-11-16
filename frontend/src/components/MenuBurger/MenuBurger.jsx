import { NavLink } from "react-router-dom";
import "./MenuBurger.css";

function Menuburger() {
  return (
    <div className="hamburger-menu">
      <label className="menu__btn" htmlFor="menu__toggle">
        <input id="menu__toggle" type="checkbox" />
        <span />
      </label>
      <ul className="menu__box">
        <NavLink to="/" className="menu__item">
          <p>Home</p>
        </NavLink>
        <NavLink to="/MyFavorites" className="menu__item">
          <p>Favoris</p>
        </NavLink>
      </ul>
    </div>
  );
}

export default Menuburger;
