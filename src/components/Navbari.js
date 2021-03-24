import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/colors.css' ;
import logo1 from '../images/kirjakauppa.png' ;
import { Link } from 'react-router-dom';


const url = "https://localhost/kirjakauppa/";
const error = "Ei toimi XD";

export default function Navbari({url}) {
  const [categories, setCategories] = useState([])

  useEffect(async() => {
    try {
      const response = await fetch(url + 'search.php');
      const json = await response.json();
      if (response.ok) {
        setCategories(json);
      } else {
        alert(json.error);
      }
    } catch (error) {
      alert(error);
      console.log("sdfisdiujdfijofdjidfgijofgdoijfgdiojdfgsoijfdgsoij")
    }
  }, [])


return (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown
  </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
      {categories.map(category => (
        <li key={category.id}>
          <Link
          className="dropdown-item"
          to={{
            pathname: '/',
            state: {
              id: category.id,
              name: category.name
            }
          }}
            >{category.name}
            </Link>
        </li>
      ))}
  </ul>
</nav>
);
}