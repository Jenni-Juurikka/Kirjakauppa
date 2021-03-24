import "../styles/colors.css";
import logo1 from "../images/kirjakauppa.png";
import { useState, useEffect, Link } from "react";

const url = "https://localhost/kirjakauppa/";

export default function Navbari({url}) {
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch(url + "products/search.php");
      const json = await response.json();
      if (response.ok) {
        setCategories(json);
      } else {
        alert(json.error);
      }
    } catch (error) {
      alert("ei toimi");
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
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
                        name: category.name,
                      }
                    }}
                  >{category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
