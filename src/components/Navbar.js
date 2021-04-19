import React from 'react';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Cart from './Cart';
import '../styles/colors.css';

//const url = 'http://localhost/kirjakauppa/'
export default function Navbar({url, cart, setCategory}) {

    const [categories, setCategories] = useState([]);

    useEffect(async() => {
        try {
            const response = await fetch(url + 'products/getcategories.php');
            const json = await response.json();
            if (response.ok) {
                setCategories(json);
                setCategory(json[0]);
            } else {
                alert(json.error);
            }
        } catch (error) {
            alert(error);
        }
    }, []);

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
            <ul className="navbar-nav ml-auto">
                <li className="nav-link">
                    <Link id="login" to="/login">Kirjaudu</Link>
                </li>
                <li className="nav-link">
                    <Cart cart={cart} />
                </li>
            </ul>
        </nav>
    )
}