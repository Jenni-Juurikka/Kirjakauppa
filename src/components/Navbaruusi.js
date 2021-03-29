import React from 'react';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

const url = 'http://localhost/kirjakauppa/'
export default function Navbaruusi({url,setCategory}) {
    const [categories, setCategories] = useState([])

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
        <div>
            <ul>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id=""></a>
                    <ul className="dropdown-menu" aria-aria-labelledby="dropdown">
                        {categories.map(tuoteryhma => (
                            <li key={tuoteryhma.trnro}>
                                <Link 
                                    className="dropdown-item"
                                    to={{
                                        pathname: '/',
                                        state: {
                                        id: tuoteryhma.trnro,
                                        name: tuoteryhma.trnimi
                                        }
                                    }}
                                    >{tuoteryhma.trnimi}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    )
}