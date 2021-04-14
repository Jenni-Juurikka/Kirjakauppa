import './App.css';
import './styles/colors.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import Footeri from './components/Footeri';
import Navbaruusi from './components/Navbaruusi';
import Home from './Home';
import Header from './components/header';
import productCart from './components/productCart';


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
  <div className="bg-color">
    <div className="container page-color">
      <Header/>
      <Navbaruusi url={URL} cart={cart} setCategory={setCategory}/>
      {/*tuoteryhmän valinta */}
      <div id="content" className="container-fluid p-2 p-sm-3 p-lg-4">
        <Switch>
          <Route path="/" render={() => <Home 
            url={URL}
            tuoteryhma={tuoteryhma}
            /*search={searchPhrase}*/ 
            addToCart={addToCart}/>}
            exact
          />
          {/* tämän pitäisi mennä ostoskoriin */}
          <Route path="/src/components/productCart.js" render={() => <productCart 
            url={URL} 
            cart={cart}
            />}
            exact
          />
        </Switch>
      </div>
      {/* <Cardit /> */}
    
      <Footeri />
    </div>
  </div>
  );
}

export default App;
