import React from 'react';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Cart from './Cart';
import '../styles/colors.css';
import Logout from '../Logout';

<<<<<<< HEAD
export default function Navbar({url, cart, setCategory, user, search}) {
=======
export default function Navbar({url, cart, user, search, /*criteria*/}) {
>>>>>>> c861a21cdcd28ed987382456d00f794c5d3d9aa6

    const [categories, setCategories] = useState([]);
    //const [criteria, setCriteria] = useState('');

    useEffect(() => {
        // let address = url + 'getcategories.php';

        // if (criteria !== null) {
        //     address = url + 'search.php/' + criteria;
        // }

        async function getCategories() {
            try {
                const response = await fetch(url + 'products/getcategories.php');
                const json = await response.json();
                if (response.ok) {
                    setCategories(json);
                } else {
                    alert(json.error);
                }
            } catch (error) {
                alert(error);
            }
        }
        getCategories();
        
    }, [/*criteria*/]);

    // function goSearch(e) {
    //     e.preventDefault();
    //     search(criteria);
    // }

    return (
        <nav className="navbar navbar-expand-md navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" 
                aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand mr-auto p-2" href="/">Kirjakauppa</a>
            <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown p-1">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Tuoteryhmät 
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {categories.map(tuoteryhma => (
                                <li key={tuoteryhma.id}>
                                    <Link 
                                        className="dropdown-item"
                                        to={{
                                            pathname: '/',
                                            state: {
                                            id: tuoteryhma.id,
                                            name: tuoteryhma.name
                                            }
                                        }}
                                        >{tuoteryhma.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className="nav-item p-1">
                        <a className="nav-link" href="tietoja">Tietoa kaupasta</a>
                    </li>
                </ul>
            </div>
            {/* <form onSubmit={goSearch}>
                <button className="btn btn-secondary">Hae</button>&nbsp;
                <input placeholder="Mitä haluat hakea?" value={criteria} onChange={e => setCriteria(e.target.value)}/>
            </form> */}
            <ul className="navbar-nav ml-auto">
                <li className="nav-link">
                    <Link id="yp" to="/yllapito">Ylläpito</Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-link">
                    <Link id="login" to="/login">Kirjaudu</Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-link">
                    <Cart cart={cart} />
                </li>
            </ul>
        </nav>
    )
}