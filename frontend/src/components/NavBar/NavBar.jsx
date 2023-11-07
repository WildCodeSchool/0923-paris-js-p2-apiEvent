import { Icon } from "@iconify/react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navBar">
      <Icon icon="octicon:home-16" color="#E9ECEF" width="40" />
      <Icon icon="ph:heart-bold" color="#E9ECEF" width="40" />
      <Icon icon="lucide:calendar-days" color="#E9ECEF" width="40" />
      <Icon icon="charm:search" color="#E9ECEF" width="40" />
    </nav>
  );
}

export default NavBar;
