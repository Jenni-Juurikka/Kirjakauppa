import './App.css';
import './styles/colors.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import Footeri from './components/Footeri';
import Navbar from './components/Navbar';
import Home from './Home';
import Header from './components/header';
import Order from './Order';
import Tuotesivu from './Tuotesivu';
import Tietoja from './Tietoja';
import Login from './Login';
import Yllapito from './Yllapito';
import Logout from './Logout';
import Testi from './Testi';

const URL = "http://localhost/kirjakauppa/";

function App() {
  const [tuoteryhma, setCategory] = useState(null);
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  let location = useLocation();

  // tarkista onko localstoragessa jotain
  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])

  // aseta tuoteryhmä
  useEffect(() => {
    if (location.state!==undefined) {
      setCategory({id: location.state.id,name: location.state.name});
    }
  }, [location.state])

  // aseta tuote
  // useEffect(() => {
  //   setProduct(product)
  // })
  

  // lisää tuote ostoskoriin
  function addToCart(tuote) {
      const newCart = [...cart,tuote];
      setCart(newCart);
      localStorage.setItem('cart',JSON.stringify(newCart));
    
  }

  // poista tuote ostoskorista
  function removeFromCart(tuote) {
    const itemsWithoutRemoved = cart.filter(item => item.id !== tuote.id);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved));
  }

  // tyhjennä koko ostoskori
  function emptyCart() {
    setCart([]);
    localStorage.removeItem('cart');
  }

  return (
  <div className="bg-color">
    <div className="container page-color">
      <Header/>
      <Navbar 
        url={URL} 
        cart={cart} 
        setCategory={setCategory}
      />
      {/*tuoteryhmän valinta */}
      <div id="content" className="container-fluid p-2 p-sm-3 p-lg-4">
        <Switch>
          <Route path="/" render={() => <Home 
            url={URL}
            tuoteryhma={tuoteryhma}
            /*search={searchPhrase}*/ 
            addToCart={addToCart}
            />}
            exact
          />
          <Route path="/order" render={() =>
            <Order
              url={URL}
              cart={cart}
              empty={emptyCart}
              removeFromCart={removeFromCart}
            />}
          />
          <Route path="/tuotesivu" render={() =>
            <Tuotesivu 
              url={URL}
              tuote={product}
              addToCart={addToCart}
            />}
          />
          <Route path="/tietoja" render={() =>
            <Tietoja 
            />}
          />
          <Route path="/testi" component={Testi} /> 
          <Route path="/Login" render={() => 
            <Login setUser={setUser}
            />
          }
          />
          <Route path="/yllapito" render={() => 
            <Yllapito 
            url={URL}
            />}
          />
          <Route path="/" exact render={() => 
            <Home user={user} />
          }
          />
          <Route path="/logout" render={() => 
            <Logout setUser={setUser} />  
          }
        />
        </Switch>
      </div>
      <Footeri />
    </div>
  </div>
  );
}

export default App;
