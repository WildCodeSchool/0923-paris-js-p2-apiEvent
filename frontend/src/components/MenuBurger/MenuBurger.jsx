import "./MenuBurger.css";

function Menuburger() {
  return (
    <div className="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" for="menu__toggle">
        <span></span>
      </label>

      <ul class="menu__box">
        <li>
          <a class="menu__item" href="#">
            Home
          </a>
        </li>
        <li>
          <a class="menu__item" href="#">
            Favoris
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menuburger;
