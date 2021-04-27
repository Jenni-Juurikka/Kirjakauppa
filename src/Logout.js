import React,{useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom';

export default function Logout({setUser,user}) {
    useEffect(() => {
      async function logout() {
        const config = {
          method: 'GET',
          credentials: 'include'
        }

        const url = 'http://localhost/kirjakauppa/login/logout.php';
        try {
          const response = await fetch(url,config);
          setUser(null);
        } catch (error) {
          alert(error);
        }
      }
      logout();
    }, [])

    if (user===null) {
      return <Redirect to="/login" />
    }

    return (
        <div>
            <p>Olet kirjautunut ulos.</p>
            <Link to="/login">Kirjaudu sisään.</Link>
        </div>
    )
}
