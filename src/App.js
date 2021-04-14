import './App.css';
import './styles/colors.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import Footeri from './components/Footeri';
import Navbar from './components/Navbar';
import Home from './Home';
import Header from './components/header';
import productCart from './components/productCart';
import Order from './Order';


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

  function addToCart(tuote) {
    if (cart.some(item => item.id === tuote.id)) {
      const existingProduct = cart.filter(item => item.id === tuote.id); 
      updateAmount(parseInt(existingProduct[0].amount) + 1, tuote);
    } else {
      const newCart = [...cart,tuote];
      setCart(newCart);
      localStorage.setItem('cart',JSON.stringify(newCart));
    }
  }

  function removeFromCart(tuote) {
    const itemsWithoutRemoved = cart.filter(item => item.id !== tuote.id);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved));
  }

  function updateAmount(amount, tuote) {
    tuote.amount = amount;
    const index = cart.findIndex((item => item.id === tuote.id));
    const modifiedCart = Object.assign([...cart], {[index]: tuote});
    setCart(modifiedCart);
    localStorage.setItem('cart',JSON.stringify(modifiedCart));
  }

  function emptyCart() {
    setCart([]);
    localStorage.removeItem('cart');
  }

  return (
  <div className="bg-color">
    <div className="container page-color">
      <Header/>
      <Navbar url={URL} cart={cart} setCategory={setCategory}/>
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
          <Route path="/order" render={() =>
            <Order
              url={URL}
              cart={cart}
              empty={emptyCart}
              removeFromCart={removeFromCart}
              updateAmount={updateAmount}
            />
          }/>
        </Switch>
      </div>
      <Footeri />
    </div>
  </div>
  );
}

export default App;
