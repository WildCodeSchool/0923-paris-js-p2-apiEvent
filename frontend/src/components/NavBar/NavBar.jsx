import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./NavBar.css";
import useAllEventsContext from "../../contexts/AllEvents";
import ModalForSearchInterface from "../ModalForSearchInterface/ModalForSearchInterface";
import useHandleCloseModalContext from "../../contexts/handleCloseModal";

function NavBar() {
  const Navigate = useNavigate();
  const { dataEvents, filterFavorites } = useAllEventsContext();
  const { open, setOpen } = useHandleCloseModalContext();

  const handleFavoritesClick = () => {
    filterFavorites();
    setOpen(false);
    Navigate("/MyFavorites");
    console.info("open", open);
  };

  const randomEvent = () => {
    return dataEvents[Math.floor(Math.random() * dataEvents.length)].uid;
  };

  return (
    <nav className="navBar">
      <Icon
        icon="octicon:home-16"
        color="#E9ECEF"
        width="40"
        onClick={() => {
          setOpen(false);
          Navigate("/");
        }}
      />
      <Icon
        icon="ph:heart-bold"
        color="#E9ECEF"
        width="40"
        onClick={handleFavoritesClick}
      />
      {/* <Icon icon="lucide:calendar-days" color="#E9ECEF" width="40" /> */}
      <Icon
        icon="ph:seal-question-fill"
        color="#E9ECEF"
        width="40"
        onClick={() => {
          setOpen(false);
          Navigate(`/Description/${randomEvent()}`);
        }}
      />
      {/* <Icon icon="charm:search" color="#E9ECEF" width="40" /> */}
      <ModalForSearchInterface />
    </nav>
  );
}

export default NavBar;
