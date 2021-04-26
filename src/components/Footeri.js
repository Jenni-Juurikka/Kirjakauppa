import React from 'react';
import logo from '../images/logo.png';
import {useState, useEffect} from 'react';

export default function Footeri({url}) {
const [hours, setHours] = useState([]);

useEffect(() => {
  fetch(url + '/footer/getopenhours.php')
  .then(response => response.json())
  .then(
    (response) => {
      setHours(response);
    }, (error) => {
      alert(error);
    }
  )
}, [])

    return (
        <footer className="pt-4 pt-md-5 ml-3 border-top">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <small className="d-block mb-3 text-muted">&copy; <a>Kirjakauppa</a> {new Date().getFullYear()}</small>
            <img style={{width: 200, height: 200}} src={logo} />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <h5>Aukioloajat</h5>
            <ul className="list-unstyled text-small">
              {hours.map(aukiolo => (
                <li key={aukiolo.paiva}>
                  {aukiolo.paiva}
                  {": "}
                  {aukiolo.auki}
                  {" - "} 
                  {aukiolo.kiinni}
                  </li>
              ))}
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <h5>Yhteystiedot</h5>
            <ul className="list-unstyled text-small">
              <li><a>kirjakauppa@gmail.com</a></li>
              <li><a>050133742069</a></li>
              <li><a>Oulu, Saaristonkatu 6-10</a></li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <h5>Sosiaalinen media</h5>
            <ul className="list-unstyled text-small">
              <li><a className="link-secondary" href="https://www.facebook.com/">Facebook</a></li>
              <li><a className="link-secondary" href="https://www.instagram.com/tonyhawk/">Instagram</a></li>
              <li><a className="link-secondary" href="https://twitter.com/">Twitter</a></li>
              <li><a className="link-secondary" href="https://www.linkedin.com/">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }