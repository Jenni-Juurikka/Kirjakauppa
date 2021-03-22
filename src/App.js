import logo from './testi.jpg';
import './App.css';
import './styles/colors.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbari from './components/Navbari';
import Footeri from './components/Footeri';
import Cardit from './components/Cardit';

function App() {
  return (
    <div className="container">
      <Navbari />
      <div className="bg-color">
      <br />
      <Cardit />
      </div>
      <Footeri />
      </div>
  );
}

export default App;
