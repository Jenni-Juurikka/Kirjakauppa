import logo from './testi.jpg';
import './App.css';
import './styles/colors.css';
import uguu from './images/uguu.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbari from './components/Navbari';
import Footeri from './components/Footeri';
import Cardit from './components/Cardit';

function App() {
  return (
    <div className="container">
      <Navbari />
      <div className="bg-color">
      <img src={uguu} class="img-fluid" alt="uguu" style={{width: 1150}}></img>
      <br />
      <Cardit />
      </div>
      <Footeri />
      </div>
  );
}

export default App;
