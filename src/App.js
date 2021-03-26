import logo from "./testi.jpg";
import "./App.css";
import "./styles/colors.css";
import banneri from "./images/banneri.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Footeri from "./components/Footeri";
import Cardit from "./components/Cardit";
import Navbari from "./components/Navbari"

function App() {
  return (
    <div className="container">
      <div className="bg-color">
        <Navbari />
        <img
          src={banneri}
          className="img-fluid"
          alt="banneri"
          style={{ width: 1150 }}
        ></img>
        <br />
        <Cardit />
      </div>
      <Footeri />
    </div>
  );
}

export default App;
