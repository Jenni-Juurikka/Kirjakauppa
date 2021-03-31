import React from 'react';
import banneri from '../images/banneri.png';

function Header() {
    return (
        <div>
            <img
            src={banneri}
            className="img-fluid"
            alt="banneri"
            style={{ width: 1150 }}
          ></img>
          <br />
        </div>
    )
}
export default Header;