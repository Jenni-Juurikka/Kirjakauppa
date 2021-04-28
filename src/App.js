import './App.css';
import './styles/colors.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect, useCallback} from 'react';
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
  const [tuote, setProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [searchCriteria, setSearchCriteria] = useState(null);

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
  // useCallback(() => {
  //   if (tuote!==undefined) {
  //     setProduct(tuote);
  //   }
  // }, [tuote])
  

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

  function search(criteria) {
    setSearchCriteria(criteria);
  }

  return (
  <div className="bg-color">
    <div className="container page-color">
      <Header/>
      <Navbar 
        url={URL} 
        cart={cart} 
        setCategory={setCategory}
        user={user}
        setUser={setUser}
        search={search}
        criteria={searchCriteria}
      />
      {/*tuoteryhmän valinta */}
      <div id="content" className="container-fluid p-2 p-sm-3 p-lg-4">
        <Switch>
          <Route path="/" render={() => <Home 
            url={URL}
            tuoteryhma={tuoteryhma}
            /*search={searchPhrase}*/ 
            addToCart={addToCart}
            user={user}
            setProduct={setProduct}
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
              tuote={tuote}
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
            url={URL}
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
            <Logout setUser={setUser}
            user={user} />  
          }
        />
        </Switch>
      </div>
      <Footeri 
        url={URL}
      />
    </div>
  </div>
  );
}

export default App;
