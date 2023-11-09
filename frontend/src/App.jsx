import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { AllEventsProvider } from "./contexts/AllEvents";

function App() {
  return (
    <AllEventsProvider>
      <BrowserRouter>
        <Router />
        <NavBar />
      </BrowserRouter>
    </AllEventsProvider>
  );
}

export default App;
