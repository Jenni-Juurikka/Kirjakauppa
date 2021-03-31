import './App.css';
import './styles/colors.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import Footeri from './components/Footeri';
import Cardit from './components/Cardit';
import Navbaruusi from './components/Navbaruusi';
import Home from './Home';
import Header from './components/header';


const URL = "http://localhost/kirjakauppa/";
function App() {
  const [tuoteryhma, setCategory] = useState(null);
  const [cart, setCart] = useState([]);

  let location = useLocation();

  useEffect(() => {
    if ('cart' in localStorage) {
      setCategory(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])

  useEffect(() => {
    if (location.state!==undefined) {
      setCategory({id: location.state.id,name: location.state.name});
    }
  }, [location.state])

  function addToCart(product) {
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
  }

  return (
    <div className="container">
      <div className="bg-color">
        <Navbaruusi url={URL} setCategory={setCategory}/>
        <Header/>
        <div id="content" className="container-fluid">
          <Switch>
            <Route path="/" render={() => <Home 
              url={URL}
              tuoteryhma={tuoteryhma}
              /*search={searchPhrase} */
              addToCart={addToCart}/>}
              exact
            />
            <Route/>
          </Switch>
        </div>
        {/* <Cardit /> */}
      </div>
      <Footeri />
    </div>
  );
}

export default App;
