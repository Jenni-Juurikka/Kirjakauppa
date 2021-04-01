import React from 'react';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Cart from './addToCart';

//const url = 'http://localhost/kirjakauppa/'
export default function Navbaruusi({url, cart, setCategory}) {

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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Valikko</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Tuoteryhmät </a>
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
                </ul>
                <ul className="navbar-nav-nav ml-auto">
                    <li className="nav-link">
                        <Cart cart={cart} />
                    </li>
                </ul>
            </div>
        </nav>
    )
}