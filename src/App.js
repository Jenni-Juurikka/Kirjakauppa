import logo from './testi.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbari from './components/Navbari';
import Footeri from './components/Footeri';

function App() {
  return (
    <div className="container">
      <Navbari />
      <br />
      <h3>DUMMY TEXT</h3>
      <Footeri />
    </div>
  );
}

export default App;
