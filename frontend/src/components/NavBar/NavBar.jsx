import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./NavBar.css";
import useAllEventsContext from "../../contexts/AllEvents";
import ModalForSearchInterface from "../ModalForSearchInterface/ModalForSearchInterface";

function NavBar() {
  const Navigate = useNavigate();
  const { dataEvents } = useAllEventsContext();

  const randomEvent = () => {
    return dataEvents[Math.floor(Math.random() * dataEvents.length)].uid;
  };

  return (
    <nav className="navBar">
      <Icon
        icon="octicon:home-16"
        color="#E9ECEF"
        width="40"
        onClick={() => Navigate(`/`)}
      />
      <Icon icon="ph:heart-bold" color="#E9ECEF" width="40" />
      {/* <Icon icon="lucide:calendar-days" color="#E9ECEF" width="40" /> */}
      <Icon
        icon="ph:seal-question-fill"
        color="#E9ECEF"
        width="40"
        onClick={() => Navigate(`/Description/${randomEvent}`)}
      />
      {/* <Icon icon="charm:search" color="#E9ECEF" width="40" /> */}
      <ModalForSearchInterface />
    </nav>
  );
}

export default NavBar;
