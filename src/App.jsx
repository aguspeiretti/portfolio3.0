import Home from "./components/Home/Home";
import Nav from "./components/NavBar/Nav";
import "./App.scss";
import Portfolio from "./components/Portfolio/Portfolio";
import SobreMi from "./components/About/SobreMi";
import Contacto from "./components/Contacto/Contacto";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <div className="homeContainer">
          <Home />
        </div>
        <div className="spacer layer1"></div>
        <div className="SobreMiContainer">
          <SobreMi />
        </div>
        <div className="spacer layer2"></div>
        <div className="proyectsContainer">
          <Portfolio />
        </div>
        <div className="spacer layer3"></div>
        <div className="contactContainer">
          <Contacto />
        </div>
      </div>
    </>
  );
}

export default App;
