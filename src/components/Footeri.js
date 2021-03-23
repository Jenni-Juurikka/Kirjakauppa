import React from 'react';
import logo from '../images/logo.png';

function Footeri() {
    return (
        <footer className="pt-4 pt-md-5 border-top">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <small className="d-block mb-3 text-muted">&copy; <a>Kirjakauppa</a> {new Date().getFullYear()}</small>
            <img style={{width: 200, height: 200}} src={logo} />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <h5>Aukioloajat</h5>
            <ul className="list-unstyled text-small">
              <li>Maanantai 7.00 - 19.00</li>
              <li>Tiistai 7.00 - 19.00</li>
              <li>Keskiviikko 7.00 - 19.00</li>
              <li>Torstai 7.00 - 19.00</li>
              <li>Perjantai 7.00 - 19.00</li>
              <li>Launtai 9.00 - 17.00</li>
              <li>Sunnutai 10.00 - 15.00</li>
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

export default Footeri;
