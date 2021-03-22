import logo from './testi.jpg';
import './App.css';
import './styles/colors.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbari from './components/Navbari';
import Footeri from './components/Footeri';

function App() {
  return (
    <div className="container">
      <Navbari />
      <div className="bg-color">
      
      <br />
      <h3>DUMMY TEXT</h3>
      </div>
      <Footeri />
    </div>
  );
}

export default App;
