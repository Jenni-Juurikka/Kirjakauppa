import React,{useEffect} from 'react'
import {Link} from 'react-router-dom';

export default function Logout({setUser}) {
    useEffect(() => {
      async function logout() {
        const config = {
          method: 'GET',
          credentials: 'include'
        }

        const url = 'http://localhost/kirjakauppa/logout.php';
        try {
          const response = await fetch(url,config);
          setUser(null);
        } catch (error) {
          alert(error);
        }
      }
      logout();
    }, [])
    return (
        <div>
            <p>Olet kirjautunut ulos.</p>
            <Link to="/login">Kirjaudu sisään.</Link>
        </div>
    )
}
