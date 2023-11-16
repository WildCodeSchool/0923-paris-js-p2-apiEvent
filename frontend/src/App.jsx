import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { AllEventsProvider } from "./contexts/AllEvents";
import { HandleCloseModalProvider } from "./contexts/handleCloseModal";

function App() {
  return (
    <HandleCloseModalProvider>
      <AllEventsProvider>
        <BrowserRouter>
          <Router />
          <NavBar />
        </BrowserRouter>
      </AllEventsProvider>
    </HandleCloseModalProvider>
  );
}

export default App;
