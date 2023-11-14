import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import QRCodeEvent from "./pages/QRCodeEvent/QRCodeEvent";
import Reservation from "./pages/Reservation/Reservation";
import SearchInterface from "./pages/SearchInterface/SearchInterface";
import UserDashboardMyEvents from "./pages/UserDashboardMyEvents/UserDashboardMyEvents";
import UserDashboardMyFavorites from "./pages/UserDashboardMyFavorites/UserDashboardMyFavorites";
import Description from "./pages/Description/Description";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SearchInterface" element={<SearchInterface />} />
      <Route path="/QRCodeEvent" element={<QRCodeEvent />} />
      <Route path="/Reservation" element={<Reservation />} />
      <Route path="/Description/:id" element={<Description />} />

      <Route
        path="/UserDashboardMyEvents"
        element={<UserDashboardMyEvents />}
      />
      <Route
        path="/UserDashboardMyFavorites"
        element={<UserDashboardMyFavorites />}
      />
    </Routes>
  );
}
export default Router;
