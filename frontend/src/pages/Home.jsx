import NavBar from "../components/NavBar/NavBar";
import "./Home.css";

export default function Home() {
  return (
    <>
      <header>
        <div className="header-name-container">
          <h1>Discover Events Near You</h1>
        </div>
      </header>
      <NavBar />
    </>
  );
}
