import logo from './testi.jpg';
import './App.css';
import './styles/colors.css';
import banneri from './images/banneri.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import Footeri from './components/Footeri';
import Cardit from './components/Cardit';
import Navbaruusi from './components/Navbaruusi';
import Home from './Home';


const URL = "http://localhost/kirjakauppa/";
function App() {
  const [tuoteryhma, setCategory] = useState(null);

  let location = useLocation();

  useEffect(() => {
    if (location.state!==undefined) {
      setCategory({id: location.state.id,name: location.state.name});
    }
  }, [location.state])

  return (
    <div className="container">
      <div className="bg-color">
        <Navbaruusi url={URL} setCategory={setCategory}/>
        <img
          src={banneri}
          className="img-fluid"
          alt="banneri"
          style={{ width: 1150 }}
        ></img>
        <br />
        <div id="content" className="container-fluid">
          <Switch>
            <Route path="/" render={() => <Home 
              url={URL}
              tuoteryhma={tuoteryhma}/>}
              exact
            />
            
          </Switch>
        </div>
        <Cardit />
      </div>
      <Footeri />
    </div>
  );
}

export default App;
