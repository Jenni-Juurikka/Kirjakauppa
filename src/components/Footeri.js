import React from 'react';

function Footeri() {
    return (
        <footer className="pt-4 pt-md-5 border-top ">
        <div className="row">
          <div className="col-12 col-md">
            <small className="d-block mb-3 text-muted">&copy; <a>Kirjakauppa</a> {new Date().getFullYear()}</small>
          </div>
          <div className="col-6 col-md">
            <h5>Aukiolo</h5>
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
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><a className="link-secondary" href="#">Resource</a></li>
              <li><a className="link-secondary" href="#">Resource name</a></li>
              <li><a className="link-secondary" href="#">Another resource</a></li>
              <li><a className="link-secondary" href="#">Final resource</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li><a className="link-secondary" href="#">Team</a></li>
              <li><a className="link-secondary" href="#">Locations</a></li>
              <li><a className="link-secondary" href="#">Privacy</a></li>
              <li><a className="link-secondary" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
    }

export default Footeri;
